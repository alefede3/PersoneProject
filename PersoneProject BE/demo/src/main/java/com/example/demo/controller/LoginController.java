package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Credenziali;
import com.example.demo.service.CredenzialiService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    @Autowired
    private CredenzialiService credenzialiService;

    @PostMapping("/login")
    public boolean verificaUtente(@RequestBody Credenziali credenziali) {
        boolean corrette = credenzialiService.credenzialiGiuste(credenziali.getUsername(), credenziali.getPassword());
        return corrette;
    } 
    
}
