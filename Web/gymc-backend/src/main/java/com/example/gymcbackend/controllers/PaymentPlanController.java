package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.PaymentPlanMethod;
import com.example.gymcbackend.services.PaymentPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentPlanController {

    @Autowired
    PaymentPlanService paymentPlanService;

    @GetMapping("/paymentPlanMethods")
    public List<PaymentPlanMethod> getPaymentPlanMethodDetails(){
        return paymentPlanService.getPaymentPlanMethodDetails();
    }

}
