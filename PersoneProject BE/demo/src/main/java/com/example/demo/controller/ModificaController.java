package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Persone;
import com.example.demo.service.PersoneService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ModificaController {

    @Autowired
    private PersoneService personeService;

    @PutMapping("person/{id}")
    public void updatePersona(@PathVariable Long id, @RequestBody Persone persona) throws Exception{
        Persone personaModificata = personeService.getPersona(id);

        personaModificata.setNome(persona.getNome());
        personaModificata.setCognome(persona.getCognome());
        personaModificata.setEta(persona.getEta());

        personeService.savePersona(personaModificata);
    }

    @GetMapping("person/{id}")
    public Persone getPersona(@PathVariable Long id) throws Exception {
        return personeService.getPersona(id);
    }

    @PutMapping("person")
    public void savePersona(@RequestBody Persone persona){
        Persone personaModificata = persona;
        personeService.savePersona(personaModificata);
    }

    @DeleteMapping("person/delete")
    public void deletePersona(Long id){
        System.out.println("id nel controller " + id);
        personeService.deletePersona(id);
    }
}
