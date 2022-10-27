package com.example.gymcbackend.entities;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Table(name = "announcement")
@Entity
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "announcementID")
    private long announcementID;

    @Column(name = "Topic")
    private String topic;

    @Column(name = "time")
    private Date time;

    @Column(name = "description")
    private String description;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "staffId")
    StaffMember staffMember;

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAnnouncementID(long announcementID) {
        this.announcementID = announcementID;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getDescription() {
        return description;
    }

    public long getAnnouncementID() {
        return announcementID;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }
}
