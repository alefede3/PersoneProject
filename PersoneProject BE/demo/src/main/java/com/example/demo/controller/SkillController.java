package com.example.demo.controller;

import com.example.demo.model.Skill;
import com.example.demo.service.ProgettiService;
import com.example.demo.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/skill/list")
    public Page<Skill> getSkillPaginateEFiltrate(@RequestParam(defaultValue = "0", required = false) Integer page,
                                                 @RequestParam(defaultValue = "10", required = false) Integer size,
                                                 @RequestParam(required = false) Long id_skillInput, @RequestParam(required = false) String nome_skillInput,
                                                 @RequestParam(required = false) String descrizione_skillInput){
        Pageable pageable = PageRequest.of(page, size);

        return skillService.getSkillPaginateEFiltrate(id_skillInput, nome_skillInput, descrizione_skillInput, pageable);
    }

    @PostMapping("/skill/add")
    public void addSkill(@RequestBody Skill skill){
        skillService.addSkill(skill);
    }

    @DeleteMapping("skill/delete")
    public void deleteSkill(@RequestParam Long id_skill){
        System.out.println("sono nel delete controller ");

        skillService.deleteSkill(id_skill);
    }

    @GetMapping("skill/{id}")
    public Skill getSkill(@PathVariable Long id){
        return skillService.getSkill(id);
    }

    @PutMapping("skill/update/{id}")
    public void updateSkill(@PathVariable Long id, @RequestBody Skill skill){
        Skill skillUpdated = skillService.getSkill(id);

        skillUpdated.setNome_skill(skill.getNome_skill());
        skillUpdated.setDescrizione_skill(skill.getDescrizione_skill());

        skillService.saveSkill(skillUpdated);
    }
}
