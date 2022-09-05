package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.services.TraineeViewScheduleService;
import com.example.gymcbackend.services.AddWorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")



public class TraineeViewScheduleController {

    @Autowired
    TraineeViewScheduleService traineeViewScheduleService;
    @Autowired
    AddWorkoutService addWorkoutService;

    @GetMapping("/getTraineeSchedule/{traineeId}")
    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(@PathVariable Long traineeId){
        System.out.println("gettraineeSchedule");
        return traineeViewScheduleService.getTraineeSchedule(traineeId);
    }

    @PostMapping("/addWorkout/{traineeId}")
    public String addWorkout(@RequestBody StaffMember staffMember){
        return addWorkoutService.addWorkout(staffMember);
    }

}
