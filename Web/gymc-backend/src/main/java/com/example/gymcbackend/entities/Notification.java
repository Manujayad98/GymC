package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.sql.Time;

@Table(name = "notification")
@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private long notificationId;

    @Column(name = "Topic")
    private String topic;

    @Column(name = "time")
    private Time time;

    @Column(name = "description")
    private String description;

    @Column(name = "state")
    private Integer state;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId")
    UserAccount userAccount;

    public long getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(long notificationId) {
        this.notificationId = notificationId;
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