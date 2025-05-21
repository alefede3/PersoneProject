package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Persone")
public class Persone{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String cognome;
    private int eta;
    private String luogo_di_nascita;
    private String citta;
    private String indirizzo;


    public Persone(){};

    public Persone(Long id, String nome, String cognome, int eta, String luogo_di_nascita, String citta, String indirizzo) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.luogo_di_nascita = luogo_di_nascita;
        this.citta = citta;
        this.indirizzo = indirizzo;

    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCognome() {
        return cognome;
    }
    public void setCognome(String cognome) {
        this.cognome = cognome;
    }
    public int getEta() {
        return eta;
    }
    public void setEta(int eta) {
        this.eta = eta;
    }
    public String getLuogo_di_nascita() {
        return luogo_di_nascita;
    }
    public void setLuogo_di_nascita(String luogo_di_nascita) {
        this.luogo_di_nascita = luogo_di_nascita;
    }
    public String getCitta() {
        return citta;
    }
    public void setCitta(String citta) {
        this.citta = citta;
    }
    public String getIndirizzo() {
        return indirizzo;
    }
    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }
    
}