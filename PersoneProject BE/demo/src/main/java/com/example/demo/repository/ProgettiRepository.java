package com.example.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Progetto;

@Repository
public interface ProgettiRepository extends JpaRepository<Progetto, Long> {
        @Query("SELECT p FROM Progetto p WHERE " +
                "(:id_progetto IS NULL OR CAST(p.id_progetto AS string) LIKE :id_progetto%) " + 
            "AND (:nome_progetto IS NULL OR :nome_progetto = '' OR p.nome_progetto LIKE :nome_progetto%)" +
            "AND (:descrizione_progetto IS NULL OR :descrizione_progetto = '' OR p.descrizione_progetto LIKE :descrizione_progetto%)" +
            "AND (:data_inizio IS NULL OR CAST(p.data_inizio AS string) LIKE %:data_inizio%)" + 
            "AND (:data_fine IS NULL  OR CAST(p.data_fine AS string) LIKE %:data_fine%)" +
            "AND (:budget IS NULL OR CAST(p.budget AS string) LIKE :budget%)")
            
        Page<Progetto> trovaProgettiPaginatiEFiltrati(@Param("id_progetto") Long id_progetto, @Param("nome_progetto") String nome_progetto,
            @Param("descrizione_progetto") String descrizione_progetto, @Param("data_inizio") String data_inizio,
            @Param("data_fine") String data_fine, @Param("budget") Integer budget, Pageable pageable );
} 

            