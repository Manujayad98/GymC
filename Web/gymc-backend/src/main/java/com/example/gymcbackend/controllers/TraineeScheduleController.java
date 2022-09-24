package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.services.TraineeViewScheduleService;
import com.example.gymcbackend.services.AddWorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
//import java.util.Date;
import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")

public class TraineeScheduleController {

    @Autowired
    TraineeViewScheduleService traineeViewScheduleService;
    @Autowired
    AddWorkoutService addWorkoutService;

    // --------------------View section---------------------

    // View Trainee Current workout schedule,on trainee row click view more
    @GetMapping("/getTraineeSchedule/{traineeId}")
    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(@PathVariable String traineeId) {
        System.out.println("gettraineeSchedule");
        return traineeViewScheduleService.getTraineeSchedule(traineeId);
    }

    //View trainee workout exerciese on date click,pass date on url
    @GetMapping("/getTraineeWorkout/{date}/{traineeId}")
    public List<TraineeViewWorkoutDateResponse> getTraineeWorkoutDate(@PathVariable String date,
            @PathVariable String traineeId) {
        LocalDate date1 = LocalDate.parse(date);
        System.out.println("awa");
        String traineeID = traineeId.substring(4);
        Long result = Long.parseLong(String.valueOf(traineeID));
        System.out.println(result);
        return traineeViewScheduleService.getTraineeDateWorkoutPlan(date1, result);
    }
//    view workout body measures(for update workout)
@GetMapping("/getBodyFactors/{date}/{traineeId}")
public BodyFactorsResponse getBodyFactors(@PathVariable String date,@PathVariable Long traineeId){
//       Date date1= java.sql.Date.valueOf(date);
    LocalDate date1 = LocalDate.parse(date);
    System.out.println("getTraineeDateOnclick");
    return traineeViewScheduleService.getWorkoutPlanBodyFactors(date1,traineeId);
}

    // View trainee diet on date click,pass date on url
    @GetMapping("/getTraineeDiet/{date}/{traineeId}")
    public DietPlan getTraineeDietDate(@PathVariable String date, @PathVariable String traineeId) {
        LocalDate traineeDate = LocalDate.parse(date);

        String traineeID = traineeId.substring(4);
        Long result = Long.parseLong(String.valueOf(traineeID));

        return traineeViewScheduleService.getTraineeDateDietPlan(traineeDate, result);
    }

    // --------------------Add section---------------------

    // Add trainee body measures and health condition, workout type
    @PostMapping("/addWorkoutSchedule/{traineeId}")
    public Long addWorkoutSchedule(@RequestBody WorkoutPlanSchedule workoutPlanSchedule, @PathVariable Long traineeId) {
        return addWorkoutService.addWorkoutSchedule(workoutPlanSchedule, traineeId);
        // pass trainee id in dto
    }

    @GetMapping("/scheduleWorkout")
    public List<ExerciseDetailsResponse> getExercises() {
        System.out.println("getexerciseDetails");
        return addWorkoutService.getExerciseDetails();
    }

    // method to check availabilty
    @GetMapping("/availabilityDate/{date}")
    public TimeSlot getAvailability(@PathVariable String date) {
        LocalDate date1 = LocalDate.parse(date);
        return traineeViewScheduleService.getDate(date1);
    }

    // @PostMapping("/addReservation/{traineeId}")
    // public String addReservation(@RequestBody WorkoutReservation
    // workoutReservation, @PathVariable Long traineeId){
    // return addWorkoutService.addReservation(workoutReservation);
    // }

    @PostMapping("/addReservation/{carbs}/{fat}/{protein}")
    public String addReservation(@RequestBody WorkoutReservation workoutReservation, @PathVariable Integer carbs,
            @PathVariable Integer fat, @PathVariable Integer protein) {
        return addWorkoutService.addReservation(workoutReservation, carbs, fat, protein);
    }

    // --------------------Update section---------------------

    // @GetMapping("/updateView/")
    // public String getUodateView (@PathVariable ){
    // return "string";
    // }

}
