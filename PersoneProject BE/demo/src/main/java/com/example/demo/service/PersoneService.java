package com.example.demo.service;

import com.example.demo.model.Persone;
import com.example.demo.repository.PersoneRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;


@Service
public class PersoneService {

    @Autowired
    private PersoneRepository personeRepository;

    public void savePersona(Persone persona) {
        personeRepository.save(persona);
    }

    public List<Persone> getAllPersone(){
        return personeRepository.findAll();
    }

    public Persone getPersona(Long id) throws Exception{
        Optional<Persone> persona = personeRepository.findById(id);
        if (persona.isPresent()) {
            return persona.get();
        }
        throw new Exception("error 404");
    }

    public Page<Persone> getPersonePaginateEFiltrate(String nomeInput, String cognomeInput, Pageable pageable){
        Page<Persone> personePage = personeRepository.trovaPersonePaginateEFiltrate(nomeInput, cognomeInput, pageable);
        return personePage;
    }

    /* public List<Persone> getPersoneFiltrateNome(String inputNome){
        return personeRepository.searchByNomeLike(inputNome);
    }

    public List<Persone> getPersoneFiltrateCognome(String inputCognome){
        return personeRepository.searchByCognomeLike(inputCognome); 
    } */

    public void deletePersona(Long id){
        personeRepository.deleteById(id);
    }
}