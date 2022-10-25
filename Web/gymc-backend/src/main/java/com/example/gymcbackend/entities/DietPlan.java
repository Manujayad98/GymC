package com.example.gymcbackend.entities;


import javax.persistence.*;
import java.util.Date;

@Table(name = "dietPlan")
@Entity
public class DietPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dietPlanID")
    private long id;

    @Column(name = "proteins")
    private Double proteins;

    @Column(name = "carbohydrate")
    private Double carbohydrate;

    @Column(name = "fats")
    private Double fats;

    @Column(name = "training_date")
    private Date trainingDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workoutScheduleID")
    WorkoutSchedule workoutSchedule;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;

    public void setId(long id) {
        this.id = id;
    }


    public void setProteins(Double proteins) {
        this.proteins = proteins;
    }

    public void setCarbohydrate(Double carbohydrate) {
        this.carbohydrate = carbohydrate;
    }

    public void setFats(Double fats) {
        this.fats = fats;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }


    public void setWorkoutSchedule(WorkoutSchedule workoutSchedule) {
        this.workoutSchedule = workoutSchedule;
    }

    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public long getId() {
        return id;
    }


    public Double getProteins() {
        return proteins;
    }

    public Double getCarbohydrate() {
        return carbohydrate;
    }

    public Double getFats() {
        return fats;
    }

    public WorkoutSchedule getWorkoutSchedule() {
        return workoutSchedule;
    }
    public Date getTrainingDate() {
        return trainingDate;
    }

    public Trainee getTrainee() {
        return trainee;
    }


}
