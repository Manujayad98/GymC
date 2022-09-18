package com.example.gymcbackend.dto;

import java.util.Date;

public class PaymentInfo {
    private String amount;
    private String type;

    private String paymentPlanMethodsID;
    private String trainee_id;
    private Date date;


    public String getAmount() {
        return amount;
    }

    public String getType() {
        return type;
    }

    public String getTrainee_id() {
        return trainee_id;
    }

    public Date getDate() {
        return date;
    }



}
