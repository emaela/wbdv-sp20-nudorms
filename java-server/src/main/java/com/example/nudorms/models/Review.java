package com.example.nudorms.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JsonIgnore
    private Building building;
    @ManyToOne
    @JsonIgnore
    private User user;
    private String username;
    private String date;
    private String text;
    private String imageUrl;
    private Double sentiment;
    
    public Integer getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Building getBuilding() {
        return this.building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Double getSentiment() {
        return this.sentiment;
    }

    public void setSentiment(Double sentiment) {
        this.sentiment = sentiment;
    }
}