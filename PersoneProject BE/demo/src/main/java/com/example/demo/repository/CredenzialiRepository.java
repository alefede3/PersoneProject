package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Credenziali;

@Repository
public interface CredenzialiRepository extends JpaRepository<Credenziali, Long> {
    Optional <Credenziali> findByUsernameAndPassword(String username, String password);
}