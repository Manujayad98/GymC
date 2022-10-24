package com.example.gymcbackend.entities;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Table(name = "workoutPlan")
@Entity
public class WorkoutPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "workoutPlanID")
    private long workoutPlanId;


    @Column(name = "thighs")
    private Double thighs;

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

    @Column(name="diseases")
    private String diseases;

    @Column(name = "training_date")
    private Date trainingDate;



    @Column(name="start_time")
    private Time startTime;


    @Column(name="end_time")
    private Time endTime;

    @OneToMany(mappedBy = "workoutPlan")
    Set<TrainingDate> trainingDates;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "staff_id")
    StaffMember staffMember;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workoutScheduleID")
    WorkoutSchedule workoutSchedule;

    public void setId(long id) {
        this.workoutPlanId = id;
    }


    public void setThighs(Double thighs) {
        this.thighs = thighs;
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

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }


    public long getId() {
        return workoutPlanId;
    }


    public Double getThighs() {
        return thighs;
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
    public Date getTrainingDate() {
        return trainingDate;
    }

    public Time getStartTime() {
        return startTime;
    }



//    public List<Exercise> getExercise() {
//        return exercise;
//    }

    public WorkoutSchedule getWorkoutSchedule() {
        return workoutSchedule;
    }

    public void setWorkoutSchedule(WorkoutSchedule workoutSchedule) {
        this.workoutSchedule = workoutSchedule;
    }


    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public long getWorkoutPlanId() {
        return workoutPlanId;
    }

    public void setWorkoutPlanId(long workoutPlanId) {
        this.workoutPlanId = workoutPlanId;
    }

    public String getDiseases() {
        return diseases;
    }

    public void setDiseases(String diseases) {
        this.diseases = diseases;
    }

    public Set<TrainingDate> getTrainingDates() {
        return trainingDates;
    }

    public void setTrainingDates(Set<TrainingDate> trainingDates) {
        this.trainingDates = trainingDates;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }
}
