package com.example.gymcbackend.dto;

public class ExerciseTrainingDate {
    private String exerciseId;
    private Integer noOfRepetitions;

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
