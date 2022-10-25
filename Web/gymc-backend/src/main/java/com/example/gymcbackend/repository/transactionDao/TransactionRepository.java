package com.example.gymcbackend.repository.transactionDao;

import com.example.gymcbackend.entities.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface TransactionRepository extends JpaRepository<Payment,Long> {
}
