package com.example.demo.repository;

import com.example.demo.model.PersonaSkill;
import com.example.demo.model.Persone;
import com.example.demo.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface PersonaSkillRepository extends JpaRepository<PersonaSkill, Long> {
    @Query("SELECT ps.skill FROM PersonaSkill ps WHERE ps.persona.id = :idPersona")
    List<Skill> findSkillsByPersonaId(Long idPersona);

    @Modifying
    @Query("DELETE FROM PersonaSkill ps WHERE ps.persona = :persona")
    void deleteByPersona(@Param("persona") Persone persona);

    @Query("SELECT ps.persona.id FROM PersonaSkill ps WHERE ps.skill.id_skill = :skillId")
    List<Long> getUsersBySkillId(@Param("skillId") Long skillId);

    @Transactional
    @Modifying
    @Query ("DELETE FROM PersonaSkill ps WHERE ps.persona.id IN :personaId")
    void removeUsersFromSkill(@Param("personaId") List<Long> personaId);
}
