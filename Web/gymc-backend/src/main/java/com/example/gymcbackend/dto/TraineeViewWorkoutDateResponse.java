package com.example.gymcbackend.dto;

public class TraineeViewWorkoutDateResponse {

    private String name;

    private Integer noOfRepetitions;

    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    public Integer getNoOfRepetitions() {
        return noOfRepetitions;
    }

    public void setNoOfRepetitions(Integer noOfRepetitions) {
        this.noOfRepetitions = noOfRepetitions;
    }
}
