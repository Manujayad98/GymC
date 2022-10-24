package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.Transactions;
import com.example.gymcbackend.entities.Payment;
import com.example.gymcbackend.repository.transactionDao.TransactionJdbcRepository;
import com.example.gymcbackend.repository.transactionDao.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TransactionService {

    @Autowired
    private TransactionJdbcRepository transactionJdbcRepository;
//    @Autowired
//    private TransactionRepository transactionRepository;

    public List<Transactions> getAllTransactionTableData() {
        return transactionJdbcRepository.findAllTransactions();
    }

    public Long getAllTransactionCardData() {
        return transactionJdbcRepository.findAllCardData();
    }
}