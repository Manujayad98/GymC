package com.example.gymcbackend.dto;

import com.example.gymcbackend.entities.Trainee;
import com.example.gymcbackend.entities.WorkoutSchedule;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

public class DietPlanResponse {

    private String dietPlanid;

    private Double proteins;

    private Double carbohydrate;

    private Double fats;

//    private Long workoutScheduleId;
//
//    private Long traineeId;
//
//    private Date traineeDate;



    public String getDietPlanid() {
        return dietPlanid;
    }

//    public Date getTraineeDate() {
//        return traineeDate;
//    }
//
//    public void setTraineeDate(Date traineeDate) {
//        this.traineeDate = traineeDate;
//    }

    public void setDietPlanid(String dietPlanid) {
        this.dietPlanid = dietPlanid;
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

//    public Long getWorkoutScheduleId() {
//        return workoutScheduleId;
//    }
//
//    public void setWorkoutScheduleId(Long workoutScheduleId) {
//        this.workoutScheduleId = workoutScheduleId;
//    }
//
//    public Long getTraineeId() {
//        return traineeId;
//    }
//
//    public void setTraineeId(Long traineeId) {
//        this.traineeId = traineeId;
//    }
}
