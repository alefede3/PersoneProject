package com.example.demo.controller;

import com.example.demo.model.Persone;
import com.example.demo.service.PersoneService;

import java.util.List;

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

    @GetMapping("/list/size")
    public int listPersone(Model model) {
        List<Persone> persone = personeService.getAllPersone();;

        return persone.size();
    }

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
}