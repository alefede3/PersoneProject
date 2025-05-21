package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Progetto")
public class Progetto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_progetto;
    private String nome_progetto;
    private String descrizione_progetto;
    private String data_inizio;
    private String data_fine;
    private Integer budget;
    
    public Progetto(){}

    public Progetto(Long id_progetto, String nome_progetto, String descrizione_progetto, String data_inizio,
            String data_fine, Integer budget) {
        this.id_progetto = id_progetto;
        this.nome_progetto = nome_progetto;
        this.descrizione_progetto = descrizione_progetto;
        this.data_inizio = data_inizio;
        this.data_fine = data_fine;
        this.budget = budget;
    }

    public Long getId_progetto() {
        return id_progetto;
    }

    public void setId_progetto(Long id_progetto) {
        this.id_progetto = id_progetto;
    }

    public String getNome_progetto() {
        return nome_progetto;
    }

    public void setNome_progetto(String nome_progetto) {
        this.nome_progetto = nome_progetto;
    }

    public String getDescrizione_progetto() {
        return descrizione_progetto;
    }

    public void setDescrizione_progetto(String descrizione_progetto) {
        this.descrizione_progetto = descrizione_progetto;
    }

    public String getData_inizio() {
        return data_inizio;
    }

    public void setData_inizio(String data_inizio) {
        this.data_inizio = data_inizio;
    }

    public String getData_fine() {
        return data_fine;
    }

    public void setData_fine(String data_fine) {
        this.data_fine = data_fine;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(int budget) {
        this.budget = budget;
    }
}
