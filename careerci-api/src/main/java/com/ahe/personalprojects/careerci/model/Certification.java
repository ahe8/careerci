package com.ahe.personalprojects.careerci.model;



import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "certifications")
public class Certification {

    @Id
    @SequenceGenerator(name = "certifications_id_seq", sequenceName = "certifications_id_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "organization")
    private String organization;

    @NotNull
    @Column(name = "name")
    private String name;

    @Column(name = "url")
    private String url;

    @NotNull
    @Column(name = "issue_date")
    private LocalDate issueDate;

    @Column(name = "expiry_date")
    private LocalDate expiryDate;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "user_firebase_uid", referencedColumnName = "firebase_uid")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Certification that = (Certification) o;
        return Objects.equals(id, that.id) && Objects.equals(organization, that.organization) && Objects.equals(name, that.name) && Objects.equals(url, that.url) && Objects.equals(issueDate, that.issueDate) && Objects.equals(expiryDate, that.expiryDate) && Objects.equals(user, that.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, organization, name, url, issueDate, expiryDate, user);
    }

    @Override
    public String toString() {
        return "Certification{" +
                "id=" + id +
                ", organization='" + organization + '\'' +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", issueDate=" + issueDate +
                ", expiryDate=" + expiryDate +
                ", user=" + user +
                '}';
    }
}
