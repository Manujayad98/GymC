package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.ExerciseTableData;
import com.example.gymcbackend.dto.PaymentInfo;
import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.TraineeInfo;
import com.example.gymcbackend.entities.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.gymcbackend.services.CashPaymentService;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class CashPaymentController {

    @Autowired
    private CashPaymentService cashPaymentService;

    //@GetMapping("/getPaymentPlan") this name here and js service file url name should tally
    //public List<PaymentInfo> getPlanInfo(){return cashPaymentService.getPlanInfo();}

    //ADD CASH PAYMENT
    @PostMapping("/cashPayment")
    public String cashPayment(@RequestBody Payment payment){
        System.out.println("payment");
        return cashPaymentService.cashPayment(payment);
    }
    //GET CASH PAYMENT
    @GetMapping("/getPayment/{trainee_ID}")
    public PaymentInfo getPaymentById(@PathVariable long trainee_ID) {
        return cashPaymentService.getAllPayments(trainee_ID);
    }

}


