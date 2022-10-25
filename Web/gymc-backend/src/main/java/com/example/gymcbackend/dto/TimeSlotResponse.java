package com.example.gymcbackend.dto;

import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.entities.TimeSlotTwo;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;

public class TimeSlotResponse {

    private TimeSlotTwo timeSlot;
    private Integer shiftNo;

    public Integer getShiftNo() {
        return shiftNo;
    }

    public void setShiftNo(Integer shiftNo) {
        this.shiftNo = shiftNo;
    }

    public TimeSlotTwo getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(TimeSlotTwo timeSlot) {
        this.timeSlot = timeSlot;
    }
}
