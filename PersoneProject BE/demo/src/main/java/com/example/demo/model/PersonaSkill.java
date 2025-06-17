package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class PersonaSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "persona_id")
    Persone persona;

    @ManyToOne
    @JoinColumn(name = "skill_id")
    Skill skill;

    public PersonaSkill(Long id, Persone persona, Skill skill) {
        this.id = id;
        this.persona = persona;
        this.skill = skill;
    }

    public PersonaSkill() {

    }

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

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}
