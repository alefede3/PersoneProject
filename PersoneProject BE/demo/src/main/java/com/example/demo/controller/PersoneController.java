package com.example.demo.controller;

import com.example.demo.model.Persone;
import com.example.demo.service.PersoneService;

import org.springframework.ui.Model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersoneController {

    @Autowired
    private PersoneService personeService;

    @GetMapping("/list")
    public List <Persone> listPersone(Model model) {
        List<Persone> persone = personeService.getAllPersone();;

        return persone;
    }

    @GetMapping("/list/")
    public Page<Persone> personePaginate(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
    Pageable pageable = PageRequest.of(page, size);
    return personeService.getPersonePaginate(pageable);
    }

    @GetMapping("/list/filtroNome")
    public List<Persone> filtraPersoneNome(@RequestParam String inputNome) {
        return personeService.getPersoneFiltrateNome(inputNome);
    }

    @GetMapping("/list/filtroCognome")
    public List<Persone> filtraPersoneCognome(@RequestParam String inputCognome) {
        return personeService.getPersoneFiltrateCognome(inputCognome);
    }
}