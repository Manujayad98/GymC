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
    private Integer eleven=0;

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



}
