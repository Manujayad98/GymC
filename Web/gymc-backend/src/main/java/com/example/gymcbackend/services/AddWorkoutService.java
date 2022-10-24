package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.repository.ExerciseDao.ExerciseJdbcRepository;
import com.example.gymcbackend.repository.addWorkoutDao.AddWorkoutJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.sql.Date;
import java.util.List;
import java.time.LocalTime;

@Service
public class AddWorkoutService {


    @Autowired
    AddWorkoutJdbcRepository traineeAddWorkoutJdbcRepository;

    @Autowired
    ExerciseJdbcRepository exerciseJdbcRepository;

    public Long addWorkoutSchedule(WorkoutPlanSchedule workoutPlanSchedule, String traineeId) {

        String traineeid = traineeId.substring(4);

        Long result = Long.parseLong(String.valueOf(traineeid));

        Long success = traineeAddWorkoutJdbcRepository.addWorkout(workoutPlanSchedule, result);
//        return traineeaddWorkout.toString();

//        WorkoutSchedule workoutSchedule=new WorkoutSchedule();

//        workoutPlanSchedule.setDuration(workoutPlanSchedule.getDuration());
//        workoutPlanSchedule.setStartDate(workoutPlanSchedule.getStartDate());
//        workoutPlanSchedule.setWorkoutName(workoutPlanSchedule.getWorkoutName());
        workoutPlanSchedule.setWorkoutType(workoutPlanSchedule.getWorkoutType());


        return success;

    }

    public List<ExerciseDetailsResponse> getExerciseDetails() {
        System.out.println("schedule service exercise details response");
        List<ExerciseDetailsResponse> exerciseDetails = exerciseJdbcRepository.getExerciseDetailsList();
        return exerciseDetails;

    }

    public String addReservation(WorkoutReservation workoutReservation, Integer carbs, Integer fat, Integer protein) {
//

        Long traineeId = workoutReservation.getTraineeId();

        System.out.println("training date list in service eid:"+workoutReservation.getTrainingDateList().get(0).getExerciseId());
        System.out.println("training date list in service reps:"+workoutReservation.getTrainingDateList().get(0).getNoOfRepetitions());


        LocalTime midnight = LocalTime.parse("00:00");
        Date tempStartDate = workoutReservation.getTrainingDate();
        LocalTime tempStartTime = workoutReservation.getStartTime();
        LocalTime tempEndTime = workoutReservation.getEndTime();
        Long ScheduleId= workoutReservation.getWorkoutScheduleId();


        int minutesUnit = 30;
        //get reservation starting slot number

        Duration duration1 = Duration.between( midnight, tempStartTime);
        long startSlotNo = (duration1.toMinutes() / minutesUnit) - 11;
        System.out.println("start slot:");
        System.out.println(startSlotNo);

        //get reservation ending slot number

        Duration duration2 = Duration.between(midnight,tempEndTime);
        long endSlotNo = (duration2.toMinutes() / minutesUnit) - 11;
        System.out.println("end slot:");
        System.out.println(endSlotNo);

        //Set availability
        String availabilitySuccess = traineeAddWorkoutJdbcRepository.setAvailability(startSlotNo,endSlotNo, tempStartDate);

        // Adding diet plan
//        String dietPlanSuccess = traineeAddWorkoutJdbcRepository.addDietPlan(tempStartDate,carbs, fat, protein,ScheduleId,traineeId);

//        Adding training workout
//        String trainingDateSuccess= traineeAddWorkoutJdbcRepository.addTrainingDate(workoutReservation.getWorkoutPlanId(),tempStartDate,tempStartTime,tempEndTime,workoutReservation.getTrainingDateList(),ScheduleId);



        return "success";
    }


    public String updateFactors(Long workoutPlanId, BodyFactorsResponse updatedBodyFactors) {
        String factorSuccess= traineeAddWorkoutJdbcRepository.updateBodyFactors(workoutPlanId,updatedBodyFactors);
        return factorSuccess;
    }

    public String updateReps(Long workoutPlanId, List<ExerciseTrainingDate> newExerciseList) {
        String repsSuccess= traineeAddWorkoutJdbcRepository.updateExercises(workoutPlanId,newExerciseList);
        return repsSuccess;
    }
}
