package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "workoutSchedule")
@Entity
public class WorkoutSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "workoutScheduleID")
    private long id;

    @Column(name = "workout_name")
    private String workoutName;

    @Column(name = "workout_type")
    private String workoutType;

    @Column(name = "status")
    private String status;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "start_date")
    private Date startDate;

    public void setId(long id) {
        this.id = id;
    }

    public void setWorkoutName(String workoutName) {
        this.workoutName = workoutName;
    }

    public void setWorkoutType(String workoutType) {
        this.workoutType = workoutType;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public long getId() {
        return id;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public String getWorkoutType() {
        return workoutType;
    }

    public String getStatus() {
        return status;
    }

    public Integer getDuration() {
        return duration;
    }

    public Date getStartDate() {
        return startDate;
    }
}
