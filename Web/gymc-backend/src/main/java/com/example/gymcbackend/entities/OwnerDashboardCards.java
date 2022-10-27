package com.example.gymcbackend.entities;

public class OwnerDashboardCards {

    private Integer no_of_trainers;
    private Long total_income;
    private Integer no_of_appointments;
    private Integer no_of_workouts;

    public Integer getNo_of_trainers() {
        return no_of_trainers;
    }

    public void setNo_of_trainers(Integer no_of_trainers) {
        this.no_of_trainers = no_of_trainers;
    }

    public Long getTotal_income() {
        return total_income;
    }

    public void setTotal_income(Long total_income) {
        this.total_income = total_income;
    }

    public Integer getNo_of_appointments() {
        return no_of_appointments;
    }

    public void setNo_of_appointments(Integer no_of_appointments) {
        this.no_of_appointments = no_of_appointments;
    }

    public Integer getNo_of_workouts() {
        return no_of_workouts;
    }

    public void setNo_of_workouts(Integer no_of_workouts) {
        this.no_of_workouts = no_of_workouts;
    }
}
