package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Credenziali;
import com.example.demo.repository.CredenzialiRepository;

@Service
public class CredenzialiService {
    
    @Autowired
    private CredenzialiRepository credenzialiRepository;

    public List<Credenziali> getAllCredenziali(){
        return credenzialiRepository.findAll();
    }

    public boolean credenzialiGiuste(String username, String password){
        Optional <Credenziali> credenziali = credenzialiRepository.findByUsernameAndPassword(username, password);
        return credenziali.isPresent();
    }
}
