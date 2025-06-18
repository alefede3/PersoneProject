package com.example.demo.repository;


import com.example.demo.model.PersonaProgetto;
import com.example.demo.model.Persone;
import com.example.demo.model.Progetto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface PersonaProgettoRepository extends JpaRepository<PersonaProgetto, Long> {

    @Query("SELECT pp.project FROM PersonaProgetto pp WHERE pp.persona.id = :idPersona")
    Progetto findProjectByPersonaId(@Param("idPersona") Long idPersona);

    @Modifying
    @Query("DELETE FROM PersonaProgetto pp WHERE pp.persona = :persona")
    void deleteByPersona(@Param("persona") Persone persona);

    @Query("SELECT pp.persona.id FROM PersonaProgetto pp WHERE pp.project.id_progetto = :idProject")
    List<Long> getPersoneByProjectId(@Param("idProject") Long idProject);

    @Transactional
    @Modifying
    @Query ("DELETE FROM PersonaProgetto pp WHERE pp.persona.id IN :personaId")
    void removeUsersFromProject(@Param("personaId") List<Long> personaId);

    boolean existsByPersonaId(Long idPersona);

}
