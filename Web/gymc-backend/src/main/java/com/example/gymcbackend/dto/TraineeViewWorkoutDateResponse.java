package com.example.gymcbackend.dto;

public class TraineeViewWorkoutDateResponse {

    private String name;

    private String exercise_id;
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

    public String getExercise_id() {
        return exercise_id;
    }

    public void setExercise_id(String exercise_id) {
        this.exercise_id = exercise_id;
    }
}
