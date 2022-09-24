package com.example.gymcbackend.dto;

import javax.persistence.Column;

public class BodyFactorsResponse {
    @Column(name = "thighs")
    private Double thighs;

    @Column(name = "hips")
    private Double hips;

    @Column(name = "chest")
    private Double chest;

    @Column(name = "forearms")
    private Double forearms;

    @Column(name = "biceps")
    private Double biceps;

    @Column(name = "height")
    private Double height;

    @Column(name = "weight")
    private Double weight;

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
}
