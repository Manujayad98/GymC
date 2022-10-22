package com.example.gymcbackend.entities;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

@Table(name = "time_slot")
@Entity
public class TimeSlot {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "date")
    private Date date;

    @Column(name = "`1`")
    @ColumnDefault("0")
    private Integer one=0;

    @Column(name = "`2`")
    @ColumnDefault("0")
    private Integer two=0;

    @Column(name = "`3`")
    @ColumnDefault("0")
    private Integer three=0;

    @Column(name = "`4`")
    @ColumnDefault("0")
    private Integer four=0;

    @Column(name = "`5`")
    @ColumnDefault("0")
    private Integer five=0;

    @Column(name = "`6`")
    @ColumnDefault("0")
    private Integer six=0;

    @Column(name = "`7`")
    @ColumnDefault("0")
    private Integer seven=0;

    @Column(name = "`8`")
    @ColumnDefault("0")
    private Integer eight=0;

    @Column(name = "`9`")
    @ColumnDefault("0")
    private Integer nine=0;

    @Column(name = "`10`")
    @ColumnDefault("0")
    private Integer ten=0;

    @Column(name = "`11`")
    @ColumnDefault("0")
    private Integer eleven;

    @Column(name = "`12`")
    @ColumnDefault("0")
    private Integer twelve=0;

    @Column(name = "`13`")
    @ColumnDefault("0")
    private Integer thirteen=0;

    @Column(name = "`14`")
    @ColumnDefault("0")
    private Integer fourteen=0;

    @Column(name = "`15`")
    @ColumnDefault("0")
    private Integer fifteen=0;

    @Column(name = "`16`")
    @ColumnDefault("0")
    private Integer sixteen=0;

    @Column(name = "`17`")
    @ColumnDefault("0")
    private Integer seventeen=0;

    @Column(name = "`18`")
    @ColumnDefault("0")
    private Integer eighteen=0;

    @Column(name = "`19`")
    @ColumnDefault("0")
    private Integer nineteen=0;

    @Column(name = "`20`")
    @ColumnDefault("0")
    private Integer twenty=0;

    @Column(name = "`21`")
    @ColumnDefault("0")
    private Integer twentyone=0;

    @Column(name = "`22`")
    @ColumnDefault("0")
    private Integer twentytwo=0;

    @Column(name = "`23`")
    @ColumnDefault("0")
    private Integer twentythree=0;

    @Column(name = "`24`")
    @ColumnDefault("0")
    private Integer twentyfour=0;

    @Column(name = "`25`")
    @ColumnDefault("0")
    private Integer twentyfive=0;

    @Column(name = "`26`")
    @ColumnDefault("0")
    private Integer twentysix=0;

    @Column(name = "`27`")
    @ColumnDefault("0")
    private Integer twentyseven=0;

    @Column(name = "`28`")
    @ColumnDefault("0")
    private Integer twentyeight=0;

    @Column(name = "`29`")
    @ColumnDefault("0")
    private Integer twentynine=0;

    @Column(name = "`30`")
    @ColumnDefault("0")
    private Integer thirty=0;

    @Column(name = "`31`")
    @ColumnDefault("0")
    private Integer thirtyone=0;

    @Column(name = "`32`")
    @ColumnDefault("0")
    private Integer thirtytwo=0;

    @Column(name = "test")
    private Integer test;

    public Integer getTest() {
        return test;
    }

    public void setTest(Integer test) {
        this.test = test;
    }

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
