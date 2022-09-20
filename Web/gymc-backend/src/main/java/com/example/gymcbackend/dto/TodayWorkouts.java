package com.example.gymcbackend.dto;

import java.util.Date;

public class TodayWorkouts {

    private String start_time;
    private String trainer_name;
    private String trainee_name;

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getTrainer_name() {
        return trainer_name;
    }

    public void setTrainer_name(String trainer_name) {
        this.trainer_name = trainer_name;
    }

    public String getTrainee_name() {
        return trainee_name;
    }

    public void setTrainee_name(String trainee_name) {
        this.trainee_name = trainee_name;
    }
}
