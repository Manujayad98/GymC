package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.Transactions;
import com.example.gymcbackend.entities.Payment;
import com.example.gymcbackend.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionsController {

    @Autowired
    TransactionService transactionService;

    // GET DATA FOR TRANSACTION TABLE
    @GetMapping("/transactions")
    public List<Transactions> getAllTransactionTableData(){
        return transactionService.getAllTransactionTableData();
    }

    // GET DATA FOR TOTAL PAYMENTS
    @GetMapping("/cards")
    public Long getAllTransactionCardData(){
        return transactionService.getAllTransactionCardData();
    }

    
}
