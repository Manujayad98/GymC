package com.example.gymcbackend.entities;

import javax.persistence.*;

@Table(name="adjustmentCount")
@Entity
public class AdjustmentCount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adjustmentCountID")
    private long id;

    @Column(name = "appoinmentCount")
    private Double appoinmentCount;

    @Column(name = "leaveCount")
    private Double leaveCount;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Double getAppoinmentCount() {
        return appoinmentCount;
    }

    public void setAppoinmentCount(Double appoinmentCount) {
        this.appoinmentCount = appoinmentCount;
    }

    public Double getLeaveCount() {
        return leaveCount;
    }

    public void setLeaveCount(Double leaveCount) {
        this.leaveCount = leaveCount;
    }
}
