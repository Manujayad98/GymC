package com.example.gymcbackend.dto;

import javax.persistence.Column;
import java.time.LocalDate;
import java.sql.Date;

public class WorkoutPlanSchedule {

    private Double thighs;
    private Double hips;
    private Double chest;
    private Double forearms;
    private Double biceps;
    private Double height;
    private Double weight;
    private String workoutType;
    private String trainerId;

    private String staff_id;
    private Date start_date;
    private Date end_date;
    private String workoutName;

//    public long getId() {
//        return id;
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }


    public String getWorkoutName() {
        return workoutName;
    }

    public void setWorkoutName(String workoutName) {
        this.workoutName = workoutName;
    }

    public Double getThighs() {
        return thighs;
    }

    public void setThighs(Double thighs) {
        this.thighs = thighs;
    }

    public Double getHips() {
        return hips;
    }

    public void setHips(Double hips) {
        this.hips = hips;
    }

    public Double getChest() {
        return chest;
    }

    public void setChest(Double chest) {
        this.chest = chest;
    }

    public Double getForearms() {
        return forearms;
    }

    public void setForearms(Double forearms) {
        this.forearms = forearms;
    }

    public Double getBiceps() {
        return biceps;
    }

    public void setBiceps(Double biceps) {
        this.biceps = biceps;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getWorkoutType() {
        return workoutType;
    }

    public void setWorkoutType(String workoutType) {
        this.workoutType = workoutType;
    }
    public String getTrainerId() {
        return trainerId;
    }

    public String getStaff_id() {
        return staff_id;
    }

    public void setStaff_id(String staff_id) {
        this.staff_id = staff_id;
    }

    public void setTrainerId(String trainerId) {
        this.trainerId = trainerId;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

}
