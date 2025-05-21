package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Progetto;
import com.example.demo.service.ProgettiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProgettiController{
    
    @Autowired 
    private ProgettiService progettiService;

    @GetMapping("projects/list")    
    public Page<Progetto> getProgettiPaginatiEFiltrati(@RequestParam (required = false, defaultValue = "0") Integer page,
                            @RequestParam (required = false, defaultValue = "10") Integer size, @RequestParam(required = false) Long id_progettoInput,
                            @RequestParam(required = false) String nome_progettoInput, @RequestParam(required = false) String descrizione_progettoInput,
                            @RequestParam(required = false) String data_inizioInput, @RequestParam(required = false) String data_fineInput, @RequestParam(required = false) Integer budgetInput) {
        
        Pageable pageable = PageRequest.of(page, size);

        return progettiService.getProgettiPaginatiEFiltrati(id_progettoInput, nome_progettoInput, descrizione_progettoInput, data_inizioInput, data_fineInput, budgetInput, pageable);
    }
}
