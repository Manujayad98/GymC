package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.AnnoucementsResponse;
import com.example.gymcbackend.dto.TodayAvailableTrainees;
import com.example.gymcbackend.dto.TodayAvailableTrainers;
import com.example.gymcbackend.dto.TraineeInfo;
import com.example.gymcbackend.services.TraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class TraineeController {

    @Autowired
    TraineeService traineeService;

    @GetMapping("/getTrainees")
    public List<TraineeInfo> getAllTrainees(){
        return traineeService.getAllTrainees();
    }

    @GetMapping("/todayAvailableTrainees")
    public List<TodayAvailableTrainees> getTodayAvailableTrainees(){
        return traineeService.getTodayAvailableTrainees();
    }
    @GetMapping("/annoucements")
    public List<AnnoucementsResponse> getAnnoucements(){
        return traineeService.getAnn();
    }
}
