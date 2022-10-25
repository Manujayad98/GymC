package com.example.gymcbackend.dto;

public class ExerciseDetailsResponse {

    private String exerciseId;

    private String name;

    private Integer noOfRepetitions = 0;



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(String exerciseId) {
        this.exerciseId = exerciseId;
    }

    public Integer getNoOfRepetitions() {
        return noOfRepetitions;
    }

    public void setNoOfRepetitions(Integer noOfRepetitions) {
        this.noOfRepetitions = noOfRepetitions;
    }
}
