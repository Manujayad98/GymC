package com.example.gymcbackend.dto;

public class TraineeInfo {
    private Long trainee_id;
    private String first_name;
    private String last_name;
    private String phone_number;
    private String address;
    private  Integer status;


    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }



    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public String getAddress() {
        return address;
    }

    public Integer getStatus() {
        return status;
    }
}
