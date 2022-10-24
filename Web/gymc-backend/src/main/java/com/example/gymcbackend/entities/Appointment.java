package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.sql.Date;

@Table(name = "appointment")
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointmentID")
    private long id;

    @Column(name = "date")
    private Date date;

    @Column(name = "start_time")
    private LocalTime startTime;

    @Column(name = "end_time")
    private LocalTime endTime;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "staffId")
    StaffMember staffMember;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;

    public void setId(long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }

    public Trainee getTrainee() {
        return trainee;
    }
}
