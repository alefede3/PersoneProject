package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.PersoneService;

import java.util.List;

import org.hibernate.dialect.function.AggregateWindowEmulationQueryTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersoneController {

    @Autowired
    private PersoneService personeService;

    @GetMapping("/list")
    public Page<Persone> personePaginateEFiltrate(@RequestParam(required = false, defaultValue = "0") Integer page,
                                                    @RequestParam(required = false, defaultValue = "10") Integer size, 
                                                    @RequestParam(required = false) String nomeInput, @RequestParam(required = false) String cognomeInput,
                                                    @RequestParam(required = false) Long idInput, @RequestParam(required = false) Integer etaInput,
                                                    @RequestParam(required = false) String luogo_di_nascitaInput, @RequestParam(required = false) String cittaInput,
                                                    @RequestParam(required = false) String indirizzoInput) {

        final Pageable pageable = PageRequest.of(page, size);

        return personeService.getPersonePaginateEFiltrate(nomeInput, cognomeInput, idInput, etaInput, 
                                                luogo_di_nascitaInput, cittaInput, indirizzoInput, pageable);
    }

    @PostMapping("/add")
    public void addPersona(@RequestBody Persone nuovaPersona) {

        personeService.savePersona(nuovaPersona);
    }

    @PostMapping("/user/{id}/skills")
    public void addSkillToPersona(@RequestBody PersonaSkillDTO personaSkillDTO, @PathVariable Long id) {
        personeService.addSkillToPersona(personaSkillDTO);
    }

    @GetMapping("/user/{id}/skills")
    public List<Skill> getSkillsByPersonaId(@PathVariable Long id) {
        return personeService.getSkillsByPersonaId(id);
    }

    @PostMapping("/user/{id}/project")
    public void addProjectToPersona(@RequestBody PersonaProgettoDTO personaProgettoDTO, @PathVariable Long id) {
        personeService.addProjectToPersona(personaProgettoDTO);
    }

    @GetMapping("/user/{id}/project")
    public Progetto getProjectByPersonaId(@PathVariable Long id) {
        return personeService.getProjectByPersonaId(id);
    }

    @GetMapping("/user/all")
    public List<Persone> getAllUsers(){
        return personeService.getAllUsers();
    }

    @GetMapping("/user/search/{nome}")
    public List<Persone> searchUsers(@PathVariable String nome){
        return  personeService.searchUsers(nome);
    }

    @GetMapping("/user/{id}/availability")
    public boolean checkUserAvailability(@PathVariable Long id){
        return personeService.checkUserAvailability(id);
    }
}

