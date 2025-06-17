package com.example.demo.repository;

import com.example.demo.model.PersonaProgetto;
import com.example.demo.model.Persone;
import com.example.demo.model.Progetto;
import com.example.demo.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Repository
public interface PersonaProgettoRepository extends JpaRepository<PersonaProgetto, Long> {

    @Query("SELECT pp.project FROM PersonaProgetto pp WHERE pp.persona.id = :idPersona")
    Progetto findProjectByPersonaId(Long idPersona);

    @Modifying
    @Query("DELETE FROM PersonaProgetto pp WHERE pp.persona = :persona")
    void deleteByPersona(@Param("persona") Persone persona);
}
