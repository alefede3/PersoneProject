package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        personaModificata.setLuogo_di_nascita(persona.getLuogo_di_nascita());
        personaModificata.setCitta(persona.getCitta());
        personaModificata.setIndirizzo(persona.getIndirizzo());

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
    public void deletePersona(@RequestParam Long id){
        personeService.deletePersona(id);
    }
}
