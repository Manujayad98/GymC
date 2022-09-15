package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.WorkoutPlanSchedule;
import com.example.gymcbackend.dto.WorkoutReservation;
import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TrainingDate;
import com.example.gymcbackend.entities.WorkoutPlan;
import com.example.gymcbackend.repository.ExerciseDao.ExerciseJdbcRepository;
import com.example.gymcbackend.repository.addWorkoutDao.AddWorkoutJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.time.Duration;
import java.time.temporal.Temporal;
import java.util.Date;
import java.util.List;
import java.time.LocalTime;

import static java.util.Calendar.AM;

@Service
public class AddWorkoutService {


    @Autowired
    AddWorkoutJdbcRepository traineeAddWorkoutJdbcRepository;

    @Autowired
    ExerciseJdbcRepository exerciseJdbcRepository;

    public String addWorkoutSchedule(WorkoutPlanSchedule workoutPlanSchedule, Long traineeId) {

        String success = traineeAddWorkoutJdbcRepository.addWorkout(workoutPlanSchedule, traineeId);
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
        List<ExerciseDetailsResponse> exerciseDetails = exerciseJdbcRepository.getExerciseDetails();
        return exerciseDetails;

    }

    public String addReservation(WorkoutReservation workoutReservation, Integer carbs, Integer fat, Integer protein) {
//

        System.out.println(workoutReservation.getExerciseId());
        System.out.println(workoutReservation.getTrainingDate());


        LocalTime midnight = LocalTime.parse("00:00");
        System.out.println(midnight);
        Date tempStartDate = workoutReservation.getTrainingDate();
        Time tempStartTime = workoutReservation.getStartTime();
        Time tempEndTime = workoutReservation.getEndTime();

        int minutesUnit = 30;
        //get reservation starting slot number

        Duration duration1 = Duration.between((Temporal) midnight, (Temporal) tempStartTime);
        long startSlotNo = (duration1.toMinutes() / minutesUnit) - 11;


        //get reservation ending slot number

        Duration duration2 = Duration.between((Temporal) midnight, (Temporal) tempStartTime);
        long endSlotNo = (duration1.toMinutes() / minutesUnit) - 11;
        //calculation of # of half an hour units


        Duration duration = Duration.between((Temporal) tempStartTime, (Temporal) tempEndTime);
        long noOfSlots = duration.toMinutes() / minutesUnit;

        String availabilitySuccess = traineeAddWorkoutJdbcRepository.setAvailability(startSlotNo,endSlotNo, tempStartDate);

        // Adding diet plan
        String dietPlanSuccess = traineeAddWorkoutJdbcRepository.addDietPlan(carbs, fat, protein);

        //Adding training dates
//        List<TrainingDate> trainingDayLst = workoutReservation.getTrainingDateList();
//        TrainingDate trainingDay = new TrainingDate();
//        for(int i=0;i<trainingDayLst.size();i++) {
////            trainingDay.setTrainingDate(trainingDayLst.get(i).getTrainingDate());
//            trainingDay.setStartTime(trainingDayLst.get(i).getStartTime());
//            trainingDay.setEndTime(trainingDayLst.get(i).getEndTime());
//            trainingDay.setExercise(trainingDayLst.get(i).getExercise());
//            trainingDay.setWorkoutPlan(trainingDayLst.get(i).getWorkoutPlan());
//            trainingDay.setTrainee(trainingDayLst.get(i).getTrainee());
//            trainingDay.setNoOfRepetitions(trainingDayLst.get(i).getNoOfRepetitions());
////            String success1 = traineeAddWorkoutJdbcRepository.save(trainingDay);
////            System.out.println(trainingDay.getTrainingDate());
//        }

        String trainingDateSuccess= traineeAddWorkoutJdbcRepository.addTrainingDate(workoutReservation.getWorkoutPlanId(),workoutReservation.getTrainingDate(),workoutReservation.getStartTime(),workoutReservation.getEndTime(),workoutReservation.getTrainingDateList());
//      String success2 = traineeAddWorkoutJdbcRepository.addTrainingDate(workoutReservation.getTrainingDate(),workoutReservation.getStartTime(),workoutReservation.getEndTime(),workoutReservations.getExerciseId(),workoutReservations.getReps());
//            if(success2){
//
//            }


        return "success";
    }


//    public String addReservation(WorkoutReservation workoutReservation){
//
//        //Adding training dates
//        List<TrainingDate> trainingDayLst = workoutReservation.getTrainingDateList();
//        TrainingDate trainingDay = new TrainingDate();
//        for(int i=0;i<trainingDayLst.size();i++) {
////            trainingDay.setTrainingDate(trainingDayLst.get(i).getTrainingDate());
//            trainingDay.setStartTime(trainingDayLst.get(i).getStartTime());
//            trainingDay.setEndTime(trainingDayLst.get(i).getEndTime());
//            trainingDay.setExercise(trainingDayLst.get(i).getExercise());
//            trainingDay.setWorkoutPlan(trainingDayLst.get(i).getWorkoutPlan());
//            trainingDay.setTrainee(trainingDayLst.get(i).getTrainee());
//            trainingDay.setNoOfRepetitions(trainingDayLst.get(i).getNoOfRepetitions());
////            String success1 = traineeAddWorkoutJdbcRepository.save(trainingDay);
////            System.out.println(trainingDay.getTrainingDate());
//        }
////        Adding diet plan
//
//        DietPlan dietPlan= workoutReservation.getDietPlan();
////        String success2 = traineeAddWorkoutJdbcRepository.save(trainingDay);
//
//        return "success";
//    }
}
