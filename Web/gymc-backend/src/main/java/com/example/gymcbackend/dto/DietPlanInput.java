package com.example.gymcbackend.dto;

import com.example.gymcbackend.entities.Trainee;
import com.example.gymcbackend.entities.WorkoutSchedule;

import javax.persistence.*;
import java.sql.Date;

public class DietPlanInput {

    private long id;
    private Double proteins;
    private Double carbohydrate;
    private Double fats;
    private Date trainingDate;
    private long workoutScheduleId;
    private long traineeId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Double getProteins() {
        return proteins;
    }

    public void setProteins(Double proteins) {
        this.proteins = proteins;
    }

    public Double getCarbohydrate() {
        return carbohydrate;
    }

    public void setCarbohydrate(Double carbohydrate) {
        this.carbohydrate = carbohydrate;
    }

    public Double getFats() {
        return fats;
    }

    public void setFats(Double fats) {
        this.fats = fats;
    }

    public Date getTrainingDate() {
        return trainingDate;
    }

    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public long getWorkoutScheduleId() {
        return workoutScheduleId;
    }

    public void setWorkoutScheduleId(long workoutScheduleId) {
        this.workoutScheduleId = workoutScheduleId;
    }

    public long getTraineeId() {
        return traineeId;
    }

    public void setTraineeId(long traineeId) {
        this.traineeId = traineeId;
    }
}
