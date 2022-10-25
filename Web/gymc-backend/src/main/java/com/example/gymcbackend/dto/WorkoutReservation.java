package com.example.gymcbackend.dto;

import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TrainingDate;
import com.example.gymcbackend.entities.WorkoutPlan;


import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.List;

public class WorkoutReservation {

    private Long exerciseId;

    private Long workoutScheduleId;
    private List<ExerciseTrainingDate> trainingDateList;

    private Date trainingDate;

    private LocalTime startTime;

    private LocalTime endTime;

    private long workoutPlanId;

    private Long traineeId;



    public Date getTrainingDate() {
        return trainingDate;
    }

    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
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


    public List<ExerciseTrainingDate> getTrainingDateList() {
        return trainingDateList;
    }

    public void setTrainingDateList(List<ExerciseTrainingDate> trainingDateList) {
        this.trainingDateList = trainingDateList;
    }

    public Long getWorkoutScheduleId() {
        return workoutScheduleId;
    }

    public void setWorkoutScheduleId(Long workoutScheduleId) {
        this.workoutScheduleId = workoutScheduleId;
    }

    public Long getTraineeId() {
        return traineeId;
    }

    public void setTraineeId(Long traineeId) {
        this.traineeId = traineeId;
    }
}
