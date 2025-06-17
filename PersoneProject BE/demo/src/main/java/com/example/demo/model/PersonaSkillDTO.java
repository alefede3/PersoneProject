package com.example.demo.model;

import java.util.List;

public class PersonaSkillDTO {
    public Long idPersona;
    public List<Long> idSelectedSkills;

    public Long getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Long idPersona) {
        this.idPersona = idPersona;
    }

    public List<Long> getIdSelectedSkills() {
        return idSelectedSkills;
    }

    public void setIdSelectedSkills(List<Long> idSelectedSkills) {
        this.idSelectedSkills = idSelectedSkills;
    }
}
