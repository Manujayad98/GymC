package com.example.gymcbackend.dto;

import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TrainingDate;
import com.example.gymcbackend.entities.WorkoutPlan;

import java.sql.Time;
import java.util.Date;
import java.util.List;

public class WorkoutReservation {

    private Long exerciseId;
//    private String exerciseName;

    private List<TrainingDate> trainingDateList;

//    private DietPlan dietPlan;

    private Integer reps;

    private Date trainingDate;

    private Time startTime;

    private Time endTime;

    private long workoutPlanId;



    public Date getTrainingDate() {
        return trainingDate;
    }

    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public long getWorkoutPlanId() {
        return workoutPlanId;
    }

    public void setWorkoutPlanId(long workoutPlanId) {
        this.workoutPlanId = workoutPlanId;
    }

    public Long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(Long exerciseId) {
        this.exerciseId = exerciseId;
    }

    public Integer getReps() {
        return reps;
    }

    public void setReps(Integer reps) {
        this.reps = reps;
    }



    public List<TrainingDate> getTrainingDateList() {
        return trainingDateList;
    }

    public void setTrainingDateList(List<TrainingDate> trainingDateList) {
        this.trainingDateList = trainingDateList;
    }
//    public DietPlan getDietPlan() {
//        return dietPlan;
//    }
//
//    public void setDietPlan(DietPlan dietPlan) {
//        this.dietPlan = dietPlan;
//    }
}
