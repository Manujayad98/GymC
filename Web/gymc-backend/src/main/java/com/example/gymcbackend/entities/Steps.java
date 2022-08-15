package com.example.gymcbackend.entities;


import javax.persistence.*;

@Table(name = "steps")
@Entity
public class Steps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stepID")
    private long id;

    @Column(name = "instruction")
    private String instruction;

    @Column(name = "frame_path")
    private String framePath;

    public void setId(long id) {
        this.id = id;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public void setFramePath(String framePath) {
        this.framePath = framePath;
    }

    public long getId() {
        return id;
    }

    public String getInstruction() {
        return instruction;
    }

    public String getFramePath() {
        return framePath;
    }
}
