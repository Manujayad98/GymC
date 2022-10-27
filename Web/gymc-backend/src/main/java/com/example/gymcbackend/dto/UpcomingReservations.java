package com.example.gymcbackend.dto;

public class UpcomingReservations {
    private String trainee_id;

    private String start_time;

    private String end_time;

    private String training_date;

    public String getTrainee_id() {
        return trainee_id;
    }

    public void setTrainee_id(String trainee_id) {
        this.trainee_id = trainee_id;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getTraining_date() {
        return training_date;
    }

    public void setTraining_date(String training_date) {
        this.training_date = training_date;
    }
}
