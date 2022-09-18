package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.PaymentPlanMethod;
import com.example.gymcbackend.entities.PaymentPlanMethods;
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

    @PostMapping("/newPaymentPlan")
    public String newPayment(@RequestBody PaymentPlanMethods paymentPlan){return paymentPlanService.newPaymentPlan(paymentPlan);}

    @GetMapping("/paymentPlanMethods")
    public List<PaymentPlanMethod> getPaymentPlanMethodDetails(){
        return paymentPlanService.getPaymentPlanMethodDetails();
    }

//     DELETE PAYMENT PLAN
    @PutMapping("/deletePaymentPlan/{paymentPlanID}")
    public long deletePaymentPlan(@PathVariable String paymentPlanID){
        int sts= 0;
        return paymentPlanService.changePaymentPlanStatus(paymentPlanID,sts);

    }

}
