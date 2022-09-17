package com.example.gymcbackend.dto;

public class ExerciseTableData {

    private String exercise_id;

    private String exercise_name;

    private String primary_muscle;

    private String secondary_muscle;

    public String getExercise_id() {
        return exercise_id;
    }

    public void setExercise_id(String exercise_id) {
        this.exercise_id = exercise_id;
    }

    public String getExercise_name() {
        return exercise_name;
    }

    public void setExercise_name(String exercise_name) {
        this.exercise_name = exercise_name;
    }

    public String getPrimary_muscle() {
        return primary_muscle;
    }

    public void setPrimary_muscle(String primary_muscle) {
        this.primary_muscle = primary_muscle;
    }

    public String getSecondary_muscle() {
        return secondary_muscle;
    }

    public void setSecondary_muscle(String secondary_muscle) {
        this.secondary_muscle = secondary_muscle;
    }
}
