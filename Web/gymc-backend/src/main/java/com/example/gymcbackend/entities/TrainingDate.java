package com.example.gymcbackend.entities;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Table(name = "trainingDate")
@Entity
public class TrainingDate {

    @Id
    @Column(name = "training_date")
    private Date trainingDate;

}
