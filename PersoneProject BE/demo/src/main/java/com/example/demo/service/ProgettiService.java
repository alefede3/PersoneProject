package com.example.demo.service;

import com.example.demo.model.Persone;
import com.example.demo.repository.PersonaProgettoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.model.Progetto;
import com.example.demo.repository.ProgettiRepository;

import java.util.List;

@Service
public class ProgettiService {

    @Autowired
    private ProgettiRepository progettiRepository;

    @Autowired
    private PersonaProgettoRepository personaProgettoRepository;

    public Page<Progetto> getProgettiPaginatiEFiltrati(Long id_progettoInput, String nome_progettoInput, String descrizione_progettoInput,
                                    String data_inizioInput, String data_fineInput, Integer budgetInput, Pageable pageable){

        Page<Progetto> progettiPage = progettiRepository.trovaProgettiPaginatiEFiltrati(id_progettoInput, nome_progettoInput, descrizione_progettoInput,
                                        data_inizioInput, data_fineInput, budgetInput, pageable);
        return progettiPage;
    }

    public void addProject(Progetto progetto){
        progettiRepository.save(progetto);
    }

    public void deleteProject(Long id_progetto){ progettiRepository.deleteById(id_progetto); }

    public void saveProject(Progetto progetto){ progettiRepository.save(progetto); }

    public Progetto getProgetto(Long id_progetto){ return progettiRepository.findById(id_progetto).get(); }

    public List<Progetto> getAllProjects(){
        return progettiRepository.findAll();
    }

    public List<Long> getPersoneByProjectId(Long id_progetto){
        return personaProgettoRepository.getPersoneByProjectId(id_progetto);
    }

    public void removeUsersFromProject (List<Long> personaId ){
        personaProgettoRepository.removeUsersFromProject(personaId);
    }
}
