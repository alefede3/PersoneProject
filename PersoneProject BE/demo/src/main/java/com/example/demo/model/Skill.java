package com.example.demo.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Skill")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id_skill;
    private String nome_skill;
    private String descrizione_skill;

    public Skill(Long id_skill, String nome_skill, String descrizione_skill, List<Persone> persone) {
        this.id_skill = id_skill;
        this.nome_skill = nome_skill;
        this.descrizione_skill = descrizione_skill;
    }

    public Skill(){ }

    public Long getId_skill() {
        return id_skill;
    }

    public void setId_skill(Long id_skill) {
        this.id_skill = id_skill;
    }

    public String getNome_skill() {
        return nome_skill;
    }

    public void setNome_skill(String nome_skill) {
        this.nome_skill = nome_skill;
    }

    public String getDescrizione_skill() {
        return descrizione_skill;
    }

    public void setDescrizione_skill(String descrizione_skill) {
        this.descrizione_skill = descrizione_skill;
    }

}
