package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.services.TraineeViewScheduleService;
import com.example.gymcbackend.services.AddWorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")



public class TraineeScheduleController {

    @Autowired
    TraineeViewScheduleService traineeViewScheduleService;
    @Autowired
    AddWorkoutService addWorkoutService;

    //View Trainee Current workout schedule,on trainee row click view more
    @GetMapping("/getTraineeSchedule/{traineeId}")
    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(@PathVariable Long traineeId){
        System.out.println("gettraineeSchedule");
        return traineeViewScheduleService.getTraineeSchedule(traineeId);
    }

    //View trainee workout on date click,pass date on url
    @GetMapping("/getTraineeWorkout/{date}/{traineeId}")
    public List<TraineeViewWorkoutDateResponse> getTraineeWorkoutDate(@PathVariable String date,@PathVariable Long traineeId){
        LocalDate date1 = LocalDate.parse(date);
        System.out.println("getTraineeDateOnclick");
        return traineeViewScheduleService.getTraineeDateWorkoutPlan(date1,traineeId);
    }

    //View trainee diet on date click,pass date on url
    @GetMapping("/getTraineeDiet/{date}/{traineeId}")
    public DietPlan getTraineeDietDate(@PathVariable String date,@PathVariable Long traineeId){
        LocalDate traineeDate = LocalDate.parse(date);
        System.out.println("getTraineeDateOnclick");
        return traineeViewScheduleService.getTraineeDateDietPlan(traineeDate,traineeId);
    }

    //Add workout

    //Add trainee body measures and health condition, workout type
    @PostMapping("/addWorkoutSchedule/{traineeId}")
    public String addWorkout(@RequestBody WorkoutPlanSchedule workoutPlanSchedule, @PathVariable Long traineeId){
        return addWorkoutService.addWorkoutSchedule(workoutPlanSchedule,traineeId);
        //pass trainee id in dto
    }
    @GetMapping("/scheduleWorkout")
    public List<ExerciseDetailsResponse> getExercises(){
        System.out.println("getexerciseDetails");
        return addWorkoutService.getExerciseDetails();
    }

    //method to check availabilty
//    @GetMapping("/allTrainingReservations/")
//    public List<TrainingReservationsResponse> getAllReservations(){ return }

//    @PostMapping("/addReservation/{traineeId}")
//    public String addReservation(@RequestBody List<WorkoutReservation> workoutReservations, @PathVariable Long traineeId){
//        return addWorkoutService.addReservation(workoutReservations);
//    }


    @PostMapping("/addReservation/{carbs}/{fat}/{protein}")
    public String addReservation(@RequestBody WorkoutReservation workoutReservation, @PathVariable Long traineeId,@PathVariable Integer carbs,@PathVariable Integer fat,@PathVariable Integer protein){
        return addWorkoutService.addReservation(workoutReservation,carbs,fat,protein);
    }
}
