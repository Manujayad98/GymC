package com.example.gymcbackend.dto;

public class ExerciseDetailsResponse {

    private String exerciseid;

    private String name;

    private Integer repCount = 0;


    public void setId(Long id) {
        this.exerciseid = exerciseid;
    }

    public String getExerciseid() {
        return exerciseid;
    }

    public void setExerciseid(String exerciseid) {
        this.exerciseid = exerciseid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getRepCount() {
        return repCount;
    }

    public void setRepCount(Integer repCount) {
        this.repCount = repCount;
    }
}
