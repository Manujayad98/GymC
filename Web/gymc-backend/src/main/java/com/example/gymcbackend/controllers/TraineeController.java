package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.services.TraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/addAnnoucements")
    public String addAnnoucement(@RequestBody AnnouncementInput announcementInput){
        return traineeService.addAnnouce(announcementInput);
    }

}