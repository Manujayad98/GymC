package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.entities.Appointment;
import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.services.TraineeViewScheduleService;
import com.example.gymcbackend.services.AddWorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
//import java.util.Date;
import java.sql.Date;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")

public class TraineeScheduleController {

    @Autowired
    TraineeViewScheduleService traineeViewScheduleService;
    @Autowired
    AddWorkoutService addWorkoutService;

    // --------------------View section---------------------

    //view appointment details of trainee user

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
    public List<DietPlanResponse> getTraineeDietDate(@PathVariable String date, @PathVariable String traineeId) {
        LocalDate traineeDate = LocalDate.parse(date);

        String traineeID = traineeId.substring(4);
        Long result = Long.parseLong(String.valueOf(traineeID));

        return traineeViewScheduleService.getTraineeDateDietPlan(traineeDate, result);
    }
    
    @GetMapping("/getTraineeProgress/{traineeId}")
    public List<TraineeProgressResponse> getTraineeProgress(@PathVariable String traineeId){
        String traineeID = traineeId.substring(4);
        Long result = Long.parseLong(String.valueOf(traineeID));
        return traineeViewScheduleService.getTraineeProgressServ(result);
    }

    // --------------------Add section---------------------

    // Add trainee body measures and health condition, workout type for schedule
    @PostMapping("/addWorkoutSchedule/{traineeId}")
    public Long addWorkoutSchedule(@RequestBody WorkoutPlanSchedule workoutPlanSchedule, @PathVariable String traineeId) {
        System.out.println("AW1");
        return addWorkoutService.addWorkoutSchedule(workoutPlanSchedule, traineeId);
        // pass trainee id in dto
    }

    @GetMapping("/scheduleWorkout")
    public List<ExerciseDetailsResponse> getExercises() {
        System.out.println("getexerciseDetails");
        return addWorkoutService.getExerciseDetails();
    }

    // method to check availabilty
    @GetMapping("/availabilityDate/{date}/{StaffId}")
    public TimeSlotResponse getAvailability(@PathVariable String date,@PathVariable Long StaffId) {
        LocalDate date1 = LocalDate.parse(date);
        return traineeViewScheduleService.getDate(date1,StaffId);
    }


     @PostMapping("/addAppointment")
     public String addAppointment(@RequestBody AppointmentInput appointment){
     return addWorkoutService.addAppoint(appointment);
     }

    @PostMapping("/addReservation/{carbs}/{fat}/{protein}")
    public String addReservation(@RequestBody WorkoutReservation workoutReservation, @PathVariable Integer carbs,
            @PathVariable Integer fat, @PathVariable Integer protein) {
        return addWorkoutService.addReservation(workoutReservation, carbs, fat, protein);
    }

    //meka hadanna add appointment in mobile app
//    @PostMapping("/addAppointment/{carbs}/{fat}/{protein}")
//    public String addAppointment(@PathVariable ) {
//        return addWorkoutService.addAppointmentmobile();
//    }

    // --------------------Update section---------------------

     @PutMapping("/updateBodyFactors/")
     public String updateBodyFactors (@RequestBody BodyFactorsResponse newBodyFactors,@PathVariable Long workoutPlanId){
     return addWorkoutService.updateFactors(workoutPlanId,newBodyFactors);
     }

     @PutMapping("/updateExercises/")
     public String updateExercises (@RequestBody List<ExerciseTrainingDate> newExerciseList ,@PathVariable Long workoutPlanId){
         return addWorkoutService.updateReps(workoutPlanId,newExerciseList);
     }

}
