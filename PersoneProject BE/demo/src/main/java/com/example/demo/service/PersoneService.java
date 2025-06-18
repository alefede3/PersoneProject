package com.example.demo.service;

import com.example.demo.model.*;
import com.example.demo.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class PersoneService {

    @Autowired
    private PersoneRepository personeRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private PersonaSkillRepository personaSkillRepository;

    @Autowired
    private ProgettiRepository progettoRepository;

    @Autowired
    private PersonaProgettoRepository personaProgettoRepository;

    public void savePersona(Persone persona) {
        personeRepository.save(persona);
    }

    public Persone getPersona(Long id) throws Exception{
        Optional<Persone> persona = personeRepository.findById(id);
        if (persona.isPresent()) {
            return persona.get();
        }
        throw new Exception("error 404");
    }

    public Page<Persone> getPersonePaginateEFiltrate(String nomeInput, String cognomeInput, Long idInput, 
                            Integer etaInput, String luogo_di_nascitaInput, String cittaInput, String indirizzoInput,
                            Pageable pageable){

        Page<Persone> personePage = personeRepository.trovaPersonePaginateEFiltrate(nomeInput, cognomeInput, 
                            idInput, etaInput, luogo_di_nascitaInput, cittaInput, indirizzoInput, pageable);
        return personePage;
    }

    public void deletePersona(Long id){
        personeRepository.deleteById(id);
    }

    public void addSkillToPersona(PersonaSkillDTO personaSkillDTO) {
        Persone persona = personeRepository.findById(personaSkillDTO.getIdPersona())
                .orElseThrow(() -> new RuntimeException("Persona non trovata con id: " + personaSkillDTO.getIdPersona()));

        personaSkillRepository.deleteByPersona(persona);

        List<Skill> skillsToAdd =  skillRepository.findAllById(personaSkillDTO.getIdSelectedSkills());

        List<PersonaSkill> personaSkill = new ArrayList<>();

        for (Skill skill : skillsToAdd) {
            PersonaSkill tmp = new PersonaSkill();
            tmp.setSkill(skill);
            tmp.setPersona(persona);

            personaSkill.add(tmp);
        }

        personaSkillRepository.saveAll(personaSkill);
    }

    public List<Skill> getSkillsByPersonaId(Long idPersona) {
        return personaSkillRepository.findSkillsByPersonaId(idPersona);
    }

    public void addProjectToPersona(PersonaProgettoDTO personaProgettoDTO){
        Persone persona = personeRepository.findById(personaProgettoDTO.getIdPersona())
                .orElseThrow(() -> new RuntimeException("Persona non trovata con id: " + personaProgettoDTO.getIdPersona()));

        personaProgettoRepository.deleteByPersona(persona);

        if (personaProgettoDTO.getIdSelectedProject() != null){
            Progetto progetto = progettoRepository.findById(personaProgettoDTO.getIdSelectedProject())
                    .orElseThrow(() -> new RuntimeException("Progetto non trovato con id: " + personaProgettoDTO.getIdSelectedProject()));

            PersonaProgetto personaProgetto = new PersonaProgetto();

            personaProgetto.setPersona(persona);
            personaProgetto.setProject(progetto);

            personaProgettoRepository.save(personaProgetto);
        }
    }

    public Progetto getProjectByPersonaId(Long idPersona){
        return personaProgettoRepository.findProjectByPersonaId(idPersona);
    }

    public List<Persone> getAllUsers(){
        return personeRepository.findAll();
    }

    public List<Persone> searchUsers(String nome){
        return personeRepository.findByNome(nome);
    }

    public boolean checkUserAvailability(Long idPersona){
        return !personaProgettoRepository.existsByPersonaId(idPersona);
    }


}