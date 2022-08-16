package com.example.gymcbackend.entities;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Table(name = "trainingDate")
@Entity
public class TrainingDate {

    @Id
    @Column(name = "training_date")
    private Date trainingDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workoutPlanID")
    WorkoutPlan workoutPlan;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;

    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public Date getTrainingDate() {
        return trainingDate;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public Trainee getTrainee() {
        return trainee;
    }
}
