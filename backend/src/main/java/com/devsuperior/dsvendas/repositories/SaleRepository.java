package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entities.Sale;

// Jpa por padrão já é um componente
public interface SaleRepository extends JpaRepository<Sale, Long>{

}
