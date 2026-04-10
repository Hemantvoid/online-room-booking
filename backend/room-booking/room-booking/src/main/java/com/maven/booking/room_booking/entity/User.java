package com.maven.booking.room_booking.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // table name in DB
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String phone;

    private String role; // "USER" or "ADMIN" (simple String for now)

    public User() {}

    public User(String name, String email, String password, String phone, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

    // Getters and Setters (generate from IDE)
    // Right click → Generate → Getter and Setter
}
