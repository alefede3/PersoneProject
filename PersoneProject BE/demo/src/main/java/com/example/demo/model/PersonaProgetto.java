package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class PersonaProgetto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "persona_id")
    Persone persona;

    @ManyToOne
    @JoinColumn(name = "progetto_id")
    Progetto project;

    public PersonaProgetto(Long id, Persone persona, Progetto project) {
        this.id = id;
        this.persona = persona;
        this.project = project;
    }

    public PersonaProgetto() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Persone getPersona() {
        return persona;
    }

    public void setPersona(Persone persona) {
        this.persona = persona;
    }

    public Progetto getProject() {
        return project;
    }

    public void setProject(Progetto project) {
        this.project = project;
    }
}
