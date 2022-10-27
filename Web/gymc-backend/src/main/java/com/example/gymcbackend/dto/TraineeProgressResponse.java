package com.example.gymcbackend.dto;

import javax.persistence.Column;

public class TraineeProgressResponse {


    private Double height;

    private Double weight;

    private Double thighs;

    private Double hips;

    private Double chest;

    private Double forearms;

    private Double biceps;

    public String training_date;
    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getThighs() {
        return thighs;
    }

    public void setThighs(Double thighs) {
        this.thighs = thighs;
    }

    public Double getHips() {
        return hips;
    }

    public void setHips(Double hips) {
        this.hips = hips;
    }

    public Double getChest() {
        return chest;
    }

    public void setChest(Double chest) {
        this.chest = chest;
    }

    public Double getForearms() {
        return forearms;
    }

    public void setForearms(Double forearms) {
        this.forearms = forearms;
    }

    public Double getBiceps() {
        return biceps;
    }

    public void setBiceps(Double biceps) {
        this.biceps = biceps;
    }

    public String getTraining_date() {
        return training_date;
    }

    public void setTraining_date(String training_date) {
        this.training_date = training_date;
    }
}
