package com.example.claimemp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.claimemp.entity.Claim;

public interface ClaimRepository extends JpaRepository<Claim, Integer>{
  
}
 