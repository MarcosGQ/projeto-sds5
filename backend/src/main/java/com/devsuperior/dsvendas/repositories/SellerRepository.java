package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entities.Seller;

// Jpa por padrão já é um componente
public interface SellerRepository extends JpaRepository<Seller, Long>{

}
