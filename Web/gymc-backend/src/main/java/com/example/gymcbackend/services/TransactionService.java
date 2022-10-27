package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.Transactions;
import com.example.gymcbackend.repository.transactionDao.TransactionJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TransactionService {

    @Autowired
    private TransactionJdbcRepository transactionJdbcRepository;


    public List<Transactions> getAllTransactionTableData() {
        return transactionJdbcRepository.findAllTransactions();
    }

    public Long getAllTransactionCardData() {
        return transactionJdbcRepository.findAllCardData();
    }

    public Long getAllCashPayments() {
        return transactionJdbcRepository.findAllCashPayments();
    }

    public Long getAllOnlinePayments() {
        return transactionJdbcRepository.findAllOnlinePayments();
    }
}
