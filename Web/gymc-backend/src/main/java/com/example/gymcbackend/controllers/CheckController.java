package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.CheckDetails;
import com.example.gymcbackend.dto.PaymentInfo;
import com.example.gymcbackend.services.CashPaymentService;
import com.example.gymcbackend.services.CheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class CheckController {
    @Autowired
    private CheckService checkService;


    //GET CASH PAYMENT
    @GetMapping("/getCheckUserDetails/{trainee_ID}")
    public CheckDetails getDetailsById(@PathVariable String trainee_ID) {
        String traineeID = trainee_ID.substring(4);
        Long result = Long.parseLong(String.valueOf(traineeID));
        return CheckService.getAllCheckDetails(result);
    }
}
