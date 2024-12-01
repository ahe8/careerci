package com.ahe.personalprojects.careerci.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.text.SimpleDateFormat;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(name = "date_applied")
    private SimpleDateFormat dateApplied;

    @NotNull
    @Column(name = "company")
    private String company;

    @NotNull
    @Column(name = "position")
    private String position;

    @NotNull
    @Column(name = "status")
    private String status;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    @JoinColumn(name = "user_firebase_uid", referencedColumnName= "firebase_uid")
    private User user;


    public SimpleDateFormat getDateApplied() {
        return dateApplied;
    }

    public void setDateApplied(SimpleDateFormat dateApplied) {
        this.dateApplied = dateApplied;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
