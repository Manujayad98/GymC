package com.example.gymcbackend.dto;

public class StaffUsers {

    private Long user_id;
    private String first_name;
    private String last_name;
    private  String staff_type;
    private  Integer status;

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setStaff_type(String staff_type) {
        this.staff_type = staff_type;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Long getUser_id() {
        return user_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getStaff_type() {
        return staff_type;
    }

    public Integer getStatus() {
        return status;
    }
}
