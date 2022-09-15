package com.example.gymcbackend.entities;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

//@Table(name = "trainingDate")
@Entity
public class TrainingDate {

    @EmbeddedId
    WorkoutPlanExerciseKey id;


    @ManyToOne
    @MapsId("workoutPlanId")
    @JoinColumn(name = "workout_planid")
    WorkoutPlan workoutPlan;


    @ManyToOne
    @MapsId("exerciseId")
    @JoinColumn(name = "exercise_id")
    Exercise exercise;

    @Column(name = "no_of_repetitions")
    private Integer noOfRepetitions;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;


    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public Trainee getTrainee() {
        return trainee;
    }

    public Integer getNoOfRepetitions() {
        return noOfRepetitions;
    }

    public void setNoOfRepetitions(Integer noOfRepetitions) {
        this.noOfRepetitions = noOfRepetitions;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }




}
