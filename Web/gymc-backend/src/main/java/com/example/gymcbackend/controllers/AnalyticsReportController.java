package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.AnnualIncome;
import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.services.AnalyticsReportService;
import com.example.gymcbackend.services.TraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalyticsReportController {

    @Autowired
    private AnalyticsReportService analyticsReportService;


    @GetMapping("/annualIncomeChartData")
    public List<AnnualIncome> getAnnualIncomeChartData(){
        System.out.println("getAnnualIncomeChartData");
        return analyticsReportService.getAnnualIncome();
    }
}
