package com.example.gymcbackend.entities;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Date;

@Table(name = "time_slot_two")
@Entity
public class TimeSlotTwo {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "date")
    private Date date;

    @Column(name = "one")
    @ColumnDefault("0")
    private Integer one=0;

    @Column(name = "two")
    @ColumnDefault("0")
    private Integer two=0;

    @Column(name = "three")
    @ColumnDefault("0")
    private Integer three=0;

    @Column(name = "four")
    @ColumnDefault("0")
    private Integer four=0;

    @Column(name = "five")
    @ColumnDefault("0")
    private Integer five=0;

    @Column(name = "six")
    @ColumnDefault("0")
    private Integer six=0;

    @Column(name = "seven")
    @ColumnDefault("0")
    private Integer seven=0;

    @Column(name = "eight")
    @ColumnDefault("0")
    private Integer eight=0;

    @Column(name = "nine")
    @ColumnDefault("0")
    private Integer nine=0;

    @Column(name = "ten")
    @ColumnDefault("0")
    private Integer ten=0;

    @Column(name = "eleven")
    @ColumnDefault("0")
    private Integer eleven;

    @Column(name = "twelve")
    @ColumnDefault("0")
    private Integer twelve=0;

    @Column(name = "thirteen")
    @ColumnDefault("0")
    private Integer thirteen=0;

    @Column(name = "fourteen")
    @ColumnDefault("0")
    private Integer fourteen=0;

    @Column(name = "fifteen")
    @ColumnDefault("0")
    private Integer fifteen=0;

    @Column(name = "sixteen")
    @ColumnDefault("0")
    private Integer sixteen=0;

    @Column(name = "seventeen")
    @ColumnDefault("0")
    private Integer seventeen=0;

    @Column(name = "eighteen")
    @ColumnDefault("0")
    private Integer eighteen=0;

    @Column(name = "nineteen")
    @ColumnDefault("0")
    private Integer nineteen=0;

    @Column(name = "twenty")
    @ColumnDefault("0")
    private Integer twenty=0;

    @Column(name = "twentyone")
    @ColumnDefault("0")
    private Integer twentyone=0;

    @Column(name = "twentytwo")
    @ColumnDefault("0")
    private Integer twentytwo=0;

    @Column(name = "twentythree")
    @ColumnDefault("0")
    private Integer twentythree=0;

    @Column(name = "twentyfour")
    @ColumnDefault("0")
    private Integer twentyfour=0;

    @Column(name = "twentyfive")
    @ColumnDefault("0")
    private Integer twentyfive=0;

    @Column(name = "twentysix")
    @ColumnDefault("0")
    private Integer twentysix=0;

    @Column(name = "twentyseven")
    @ColumnDefault("0")
    private Integer twentyseven=0;

    @Column(name = "twentyeight")
    @ColumnDefault("0")
    private Integer twentyeight=0;

    @Column(name = "twentynine")
    @ColumnDefault("0")
    private Integer twentynine=0;

    @Column(name = "thirty")
    @ColumnDefault("0")
    private Integer thirty=0;

    @Column(name = "thirtyone")
    @ColumnDefault("0")
    private Integer thirtyone=0;

    @Column(name = "thirtytwo")
    @ColumnDefault("0")
    private Integer thirtytwo=0;


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getOne() {
        return one;
    }

    public void setOne(Integer one) {
        this.one = one;
    }

    public Integer getTwo() {
        return two;
    }

    public void setTwo(Integer two) {
        this.two = two;
    }

    public Integer getThree() {
        return three;
    }

    public void setThree(Integer three) {
        this.three = three;
    }

    public Integer getFour() {
        return four;
    }

    public void setFour(Integer four) {
        this.four = four;
    }

    public Integer getFive() {
        return five;
    }

    public void setFive(Integer five) {
        this.five = five;
    }

    public Integer getSix() {
        return six;
    }

    public void setSix(Integer six) {
        this.six = six;
    }

    public Integer getSeven() {
        return seven;
    }

    public void setSeven(Integer seven) {
        this.seven = seven;
    }

    public Integer getEight() {
        return eight;
    }

    public void setEight(Integer eight) {
        this.eight = eight;
    }

    public Integer getNine() {
        return nine;
    }

    public void setNine(Integer nine) {
        this.nine = nine;
    }

    public Integer getTen() {
        return ten;
    }

    public void setTen(Integer ten) {
        this.ten = ten;
    }

    public Integer getEleven() {
        return eleven;
    }

    public void setEleven(Integer eleven) {
        this.eleven = eleven;
    }

    public Integer getTwelve() {
        return twelve;
    }

    public void setTwelve(Integer twelve) {
        this.twelve = twelve;
    }

    public Integer getThirteen() {
        return thirteen;
    }

    public void setThirteen(Integer thirteen) {
        this.thirteen = thirteen;
    }

    public Integer getFourteen() {
        return fourteen;
    }

    public void setFourteen(Integer fourteen) {
        this.fourteen = fourteen;
    }

    public Integer getFifteen() {
        return fifteen;
    }

    public void setFifteen(Integer fifteen) {
        this.fifteen = fifteen;
    }

    public Integer getSixteen() {
        return sixteen;
    }

    public void setSixteen(Integer sixteen) {
        this.sixteen = sixteen;
    }

    public Integer getSeventeen() {
        return seventeen;
    }

    public void setSeventeen(Integer seventeen) {
        this.seventeen = seventeen;
    }

    public Integer getEighteen() {
        return eighteen;
    }

    public void setEighteen(Integer eighteen) {
        this.eighteen = eighteen;
    }

    public Integer getNineteen() {
        return nineteen;
    }

    public void setNineteen(Integer nineteen) {
        this.nineteen = nineteen;
    }

    public Integer getTwenty() {
        return twenty;
    }

    public void setTwenty(Integer twenty) {
        this.twenty = twenty;
    }

    public Integer getTwentyone() {
        return twentyone;
    }

    public void setTwentyone(Integer twentyone) {
        this.twentyone = twentyone;
    }

    public Integer getTwentytwo() {
        return twentytwo;
    }

    public void setTwentytwo(Integer twentytwo) {
        this.twentytwo = twentytwo;
    }

    public Integer getTwentythree() {
        return twentythree;
    }

    public void setTwentythree(Integer twentythree) {
        this.twentythree = twentythree;
    }

    public Integer getTwentyfour() {
        return twentyfour;
    }

    public void setTwentyfour(Integer twentyfour) {
        this.twentyfour = twentyfour;
    }

    public Integer getTwentyfive() {
        return twentyfive;
    }

    public void setTwentyfive(Integer twentyfive) {
        this.twentyfive = twentyfive;
    }

    public Integer getTwentysix() {
        return twentysix;
    }

    public void setTwentysix(Integer twentysix) {
        this.twentysix = twentysix;
    }

    public Integer getTwentyseven() {
        return twentyseven;
    }

    public void setTwentyseven(Integer twentyseven) {
        this.twentyseven = twentyseven;
    }

    public Integer getTwentyeight() {
        return twentyeight;
    }

    public void setTwentyeight(Integer twentyeight) {
        this.twentyeight = twentyeight;
    }

    public Integer getTwentynine() {
        return twentynine;
    }

    public void setTwentynine(Integer twentynine) {
        this.twentynine = twentynine;
    }

    public Integer getThirty() {
        return thirty;
    }

    public void setThirty(Integer thirty) {
        this.thirty = thirty;
    }

    public Integer getThirtyone() {
        return thirtyone;
    }

    public void setThirtyone(Integer thirtyone) {
        this.thirtyone = thirtyone;
    }

    public Integer getThirtytwo() {
        return thirtytwo;
    }

    public void setThirtytwo(Integer thirtytwo) {
        this.thirtytwo = thirtytwo;
    }
}
