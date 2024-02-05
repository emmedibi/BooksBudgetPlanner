package com.myProjects.BooksBudgetPlanner.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;

    private String author;

    private float price;

    private boolean isRead;

    // If you bought the book before starting to plan your books buying with this app
    private boolean isBoughtBeforeRegisterOnTheApp;

    public Book(String title, String author, float price, boolean isRead, boolean isBoughtBeforeRegisterOnTheApp) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.isRead = isRead;
        this.isBoughtBeforeRegisterOnTheApp = isBoughtBeforeRegisterOnTheApp;
    }

    public Book() {
    }
}
