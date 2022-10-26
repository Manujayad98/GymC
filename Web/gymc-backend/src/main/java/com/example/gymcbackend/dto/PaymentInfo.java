package com.example.gymcbackend.dto;

import java.util.Date;

public class PaymentInfo {
    private String amount;
    private String type;
    private String date;


    public String getAmount() {
        return amount;
    }

    public String getType() {
        return type;
    }

    public String getDate() {
        return date;
    }


    public void setAmount(String amount) {
        this.amount = amount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
