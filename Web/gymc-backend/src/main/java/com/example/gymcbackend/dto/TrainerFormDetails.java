package com.example.gymcbackend.dto;

import com.example.gymcbackend.entities.ShiftDetails;
import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.entities.UserAccount;

import java.util.Date;

public class TrainerFormDetails {

    private String firstName;
    private String lastName;
    private Character gender;
    private String address;
    private String email;
    private Date dob;
    private String nic;
    private String phoneNumber;
    private String staffType;
    private String qualification;

    private String shiftMonday;
    private String shiftTuesday;
    private String shiftWednesday;
    private String shiftThursday;
    private String shiftFriday;
    private String shiftSaturday;

    StaffMember staffMember;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Character getGender() {
        return gender;
    }

    public void setGender(Character gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getStaffType() {
        return staffType;
    }

    public void setStaffType(String staffType) {
        this.staffType = staffType;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getShiftMonday() {
        return shiftMonday;
    }

    public void setShiftMonday(String shiftMonday) {
        this.shiftMonday = shiftMonday;
    }

    public String getShiftTuesday() {
        return shiftTuesday;
    }

    public void setShiftTuesday(String shiftTuesday) {
        this.shiftTuesday = shiftTuesday;
    }

    public String getShiftWednesday() {
        return shiftWednesday;
    }

    public void setShiftWednesday(String shiftWednesday) {
        this.shiftWednesday = shiftWednesday;
    }

    public String getShiftThursday() {
        return shiftThursday;
    }

    public void setShiftThursday(String shiftThursday) {
        this.shiftThursday = shiftThursday;
    }

    public String getShiftFriday() {
        return shiftFriday;
    }

    public void setShiftFriday(String shiftFriday) {
        this.shiftFriday = shiftFriday;
    }

    public String getShiftSaturday() {
        return shiftSaturday;
    }

    public void setShiftSaturday(String shiftSaturday) {
        this.shiftSaturday = shiftSaturday;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }
}
