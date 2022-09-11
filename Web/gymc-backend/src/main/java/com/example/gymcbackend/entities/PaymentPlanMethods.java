package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name="paymentPlanMethods")
@Entity
public class PaymentPlanMethods {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentPlanMethodsID")
    private long id;

    @Column(name = "type")
    private String type;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "affectedDate")
    private Date affectedDate;

    @Column(name = "nextAmount")
    private Double nextAmount;

    @Column(name = "status")
    private boolean status=true;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Date getAffectedDate() {
        return affectedDate;
    }

    public void setAffectedDate(Date affectedDate) {
        this.affectedDate = affectedDate;
    }

    public Double getNextAmount() {
        return nextAmount;
    }

    public void setNextAmount(Double nextAmount) {
        this.nextAmount = nextAmount;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
