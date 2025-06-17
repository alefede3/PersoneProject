package com.example.demo.service;

import com.example.demo.model.Skill;
import com.example.demo.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public Page<Skill> getSkillPaginateEFiltrate(Long id_skillInput, String nome_skillInput, String descrizione_skillInput, Pageable pageable) {
        Page<Skill> skillPage =  skillRepository.getSkillPaginateEFiltrate(id_skillInput, nome_skillInput, descrizione_skillInput, pageable);

        return skillPage;
    }

    public void addSkill(Skill skill) {
        skillRepository.save(skill);
    }

    public void deleteSkill(Long id_skill) {
        skillRepository.deleteById(id_skill);
    }

    public Skill getSkill(Long id_skill) {
        return (Skill) skillRepository.findById(id_skill).get();
    }

    public void saveSkill(Skill skill) {
        skillRepository.save(skill);
    }

    public List<Skill> getAllSkills() {return skillRepository.findAll();}
}
