package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Credenziali")
public class Credenziali {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_credenziali;
    private String username;
    private String password;

    public Credenziali(){};

    public Credenziali(Long id_credenziali, String username, String password) {
        this.id_credenziali = id_credenziali;
        this.username = username;
        this.password = password;
    }

    public Long getid_credenziali() {
        return id_credenziali;
    }
    public void setid_credenziali(Long id_credenziali) {
        this.id_credenziali = id_credenziali;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }   
}