package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.AdjustmentCount;
import com.example.gymcbackend.services.AdjustmentCountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AdjustmentCountController {

    @Autowired
    AdjustmentCountService adjustmentCountService;

    @GetMapping("/adjustmentCount")
    public List<AdjustmentCount> getAdjustmentCountDetails(){
        return adjustmentCountService.getAdjustmentCountDetails();
    }

}
