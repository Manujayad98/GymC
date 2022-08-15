package com.example.gymcbackend.entities;


import javax.persistence.*;

@Table(name = "workoutPlan")
@Entity
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "workoutPlanID")
    private long id;

    @Column(name = "weight_class")
    private String weightClass;

    @Column(name = "tights")
    private Double tights;

    @Column(name = "hips")
    private Double hips;

    @Column(name = "chest")
    private Double chest;

    @Column(name = "forearms")
    private Double forearms;

    @Column(name = "biceps")
    private Double biceps;

    @Column(name = "height")
    private Double height;

    @Column(name = "weight")
    private Double weight;

    public void setId(long id) {
        this.id = id;
    }

    public void setWeightClass(String weightClass) {
        this.weightClass = weightClass;
    }

    public void setTights(Double tights) {
        this.tights = tights;
    }

    public void setHips(Double hips) {
        this.hips = hips;
    }

    public void setChest(Double chest) {
        this.chest = chest;
    }

    public void setForearms(Double forearms) {
        this.forearms = forearms;
    }

    public void setBiceps(Double biceps) {
        this.biceps = biceps;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public long getId() {
        return id;
    }

    public String getWeightClass() {
        return weightClass;
    }

    public Double getTights() {
        return tights;
    }

    public Double getHips() {
        return hips;
    }

    public Double getChest() {
        return chest;
    }

    public Double getForearms() {
        return forearms;
    }

    public Double getBiceps() {
        return biceps;
    }

    public Double getHeight() {
        return height;
    }

    public Double getWeight() {
        return weight;
    }
}
