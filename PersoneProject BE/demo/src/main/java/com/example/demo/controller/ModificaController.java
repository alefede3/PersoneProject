package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    public void updatePersona(@PathVariable Long id, @RequestBody Persone persone) throws Exception{
        System.out.println("Persona passata all'invio " + persone);
        Persone personaModificata = personeService.getPersona(id);

        personaModificata.setNome(persone.getNome());
        personaModificata.setCognome(persone.getCognome());
        personaModificata.setEta(persone.getEta());

        personeService.savePersona(personaModificata);
    }

    @GetMapping("person/{id}")
    public Persone getPersone(@PathVariable Long id) throws Exception {
        System.out.println("sono nel controller su springboot ");
        return personeService.getPersona(id);
    }

    @PutMapping("person")
    public void savePersona(@RequestBody Persone persona){
        Persone personaModificata = persona;
        personeService.savePersona(personaModificata);
    }
}
