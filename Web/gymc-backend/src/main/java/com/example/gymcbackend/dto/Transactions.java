package com.example.gymcbackend.dto;

public class Transactions {

    private String payment_id;

    private String amount;

    private String type;

    private String date;

    private String payment_planid;

    private String trainee_id;

    public String getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(String payment_id) {
        this.payment_id = payment_id;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPayment_planid() {
        return payment_planid;
    }

    public void setPayment_planid(String payment_planid) {
        this.payment_planid = payment_planid;
    }

    public String getTrainee_id() {
        return trainee_id;
    }

    public void setTrainee_id(String trainee_id) {
        this.trainee_id = trainee_id;
    }
}
