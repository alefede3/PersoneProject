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
    @Query("SELECT p FROM Persone p WHERE(:nome IS NULL OR :nome = '' OR p.nome LIKE %:nome%)  AND (:cognome IS NULL OR :cognome = '' OR p.cognome LIKE %:cognome%) ORDER BY p.id")
    Page<Persone> trovaPersonePaginateEFiltrate(@Param("nome") String nome, @Param("cognome") String cognome, Pageable pageable);

    /* @Query("SELECT p FROM Persone p WHERE p.nome LIKE %:nome%")
    List<Persone> searchByNomeLike(@Param("nome") String nome);

    @Query("SELECT p FROM Persone p WHERE p.cognome LIKE %:cognome%")
    List<Persone> searchByCognomeLike(@Param("cognome") String cognome); */
}
