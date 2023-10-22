package com.example.claimemp.service;

import java.util.ArrayList;
import java.util.List;

import com.example.claimemp.entity.Claim;

public interface ClaimService {

  Claim saveClaim(Claim claim);

  Claim getClaim(int id);

  List<Claim> getAllClaims();

  Claim updateClaim(int id, Claim claim);

  void deleteClaim(int id);

}
