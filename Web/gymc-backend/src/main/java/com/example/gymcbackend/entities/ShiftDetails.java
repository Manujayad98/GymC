package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "shift_details")
@Entity
public class ShiftDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shift_id")
    private long shiftID;

    @Column(name = "monday")
    private Integer monday;

    @Column(name = "tuesday")
    private Integer tuesday;
    @Column(name = "wednesday")
    private Integer wednesday;
    @Column(name = "thursday")
    private Integer thursday;
    @Column(name = "friday")
    private Integer friday;
    @Column(name = "saturday")
    private Integer saturday;

    @OneToOne
    @JoinColumn(name="staff_id")
    private StaffMember staffMember;

    public long getShiftID() {
        return shiftID;
    }

    public void setShiftID(long shiftID) {
        this.shiftID = shiftID;
    }

    public Integer getMonday() {
        return monday;
    }

    public void setMonday(Integer monday) {
        this.monday = monday;
    }

    public Integer getTuesday() {
        return tuesday;
    }

    public void setTuesday(Integer tuesday) {
        this.tuesday = tuesday;
    }

    public Integer getWednesday() {
        return wednesday;
    }

    public void setWednesday(Integer wednesday) {
        this.wednesday = wednesday;
    }

    public Integer getThursday() {
        return thursday;
    }

    public void setThursday(Integer thursday) {
        this.thursday = thursday;
    }

    public Integer getFriday() {
        return friday;
    }

    public void setFriday(Integer friday) {
        this.friday = friday;
    }

    public Integer getSaturday() {
        return saturday;
    }

    public void setSaturday(Integer saturday) {
        this.saturday = saturday;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }
}
