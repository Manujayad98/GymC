package com.example.gymcbackend.dto;

public class ThisMonthIncomeChartData {

    private String dateN;
    private Double totalIncome;

    public String getDateN() {
        return dateN;
    }

    public void setDateN(String dateN) {
        this.dateN = dateN;
    }

    public Double getTotalIncome() {
        return totalIncome;
    }

    public void setTotalIncome(Double totalIncome) {
        this.totalIncome = totalIncome;
    }
}
