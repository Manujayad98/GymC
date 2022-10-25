package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.sql.Time;

public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notificationID")
    private long notificationID;

    @Column(name = "Topic")
    private String topic;

    @Column(name = "time")
    private Time time;

    @Column(name = "description")
    private String description;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId")
    UserAccount userAccount;

    public long getNotificationID() {
        return notificationID;
    }

    public void setNotificationID(long notificationID) {
        this.notificationID = notificationID;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
