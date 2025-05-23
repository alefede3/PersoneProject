package com.example.demo.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Persone;

@Repository
public interface PersoneRepository extends JpaRepository<Persone, Long> {
    @Query("SELECT p FROM Persone p " +
            "WHERE (:nome IS NULL OR :nome = '' OR p.nome LIKE :nome%) " +
            "AND (:cognome IS NULL OR :cognome = '' OR p.cognome LIKE :cognome%) " +
            "AND (:id IS NULL OR CAST(p.id AS string) LIKE :id%) " +
            "AND (:eta IS NULL OR CAST(p.eta AS string) LIKE :eta%) " + 
            "AND (:luogo_di_nascita IS NULL OR :luogo_di_nascita = '' OR p.luogo_di_nascita LIKE :luogo_di_nascita%) " +
            "AND (:citta IS NULL OR :citta = '' OR p.citta LIKE :citta%) " +
            "AND (:indirizzo IS NULL OR :indirizzo = '' OR p.indirizzo LIKE :indirizzo%) " +
            "ORDER BY p.id")
    
    Page<Persone> trovaPersonePaginateEFiltrate(@Param("nome") String nome, @Param("cognome") String cognome, 
                    @Param("id") Long id, @Param("eta") Integer eta, @Param("luogo_di_nascita") String luogo_di_nascita, 
                    @Param("citta") String citta, @Param("indirizzo") String indirizzo, Pageable pageable);

}
