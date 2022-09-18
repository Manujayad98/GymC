package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Table(name = "exercise")
@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exerciseID")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "calories_Per_Rep")
    private Double caloriesPerRep;

    @Column(name = "primary_muscle")
    private String primaryMuscle;

    @Column(name = "secondary_muscle")
    private String secondaryMuscle;

    @Column(name = "status")
    private String status;
    @Column(name = "default_reps")
    private String defaultReps;

    // @ManyToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "equipmentID")
    // Equipment equipment;

    // for many to many map

    @OneToMany(mappedBy = "workoutPlan")
    Set<TrainingDate> trainingDates;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "equipmentid")
    Equipment equipment;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCaloriesPerRep(Double caloriesPerRep) {
        this.caloriesPerRep = caloriesPerRep;
    }

    public void setPrimaryMuscle(String primaryMuscle) {
        this.primaryMuscle = primaryMuscle;
    }

    public void setSecondaryMuscle(String secondaryMuscle) {
        this.secondaryMuscle = secondaryMuscle;
    }

    // public void setEquipment(List<Equipment> equipment) {
    // this.equipment = equipment;
    // }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }

    public void setDefaultReps(String defaultReps) {
        this.defaultReps = defaultReps;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getCaloriesPerRep() {
        return caloriesPerRep;
    }

    public String getPrimaryMuscle() {
        return primaryMuscle;
    }

    public String getSecondaryMuscle() {
        return secondaryMuscle;
    }

    // public List<Equipment> getEquipment() {
    // return equipment;
    // }

    public String getDefaultReps() {
        return defaultReps;
    }

    public Equipment getEquipment() {
        return equipment;
    }
}
