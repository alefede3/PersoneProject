package com.example.demo.repository;


import com.example.demo.model.Progetto;
import com.example.demo.model.Skill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    @Query("SELECT s FROM Skill s " +
            "WHERE (:id_skill IS NULL OR CAST(s.id_skill AS string) LIKE :id_skill%) " +
            "AND (:nome_skill IS NULL OR :nome_skill = '' OR s.nome_skill LIKE :nome_skill%) " +
            "AND (:descrizione_skill IS NULL OR :descrizione_skill = '' OR s.descrizione_skill LIKE :descrizione_skill%) " +
            "ORDER BY s.id_skill")

    Page<Skill> getSkillPaginateEFiltrate(@Param("id_skill") Long id_skill, @Param("nome_skill") String nome_skill,
                                                  @Param("descrizione_skill") String descrizione_skill, Pageable pageable );
}
