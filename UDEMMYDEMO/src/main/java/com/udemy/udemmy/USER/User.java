package com.udemy.udemmy.USER;

import org.springframework.web.bind.annotation.RestController;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   // @NotNull(message = "full name is required")
    private String name;
   // @NotNull(message = "Email number is required")
    private String email;
   // @NotNull(message = "Phone number is required")
   // @Size(min = 10, max = 12, message = "Phone number should be 10 or 12 digits")
    private String phone;
   // @NotNull(message = "Username is required")
    private String username;
    //@NotNull(message = "Password is required")
    //@Size(min = 6, max = 15, message = "Password should be atleast 6 and atmost 15 characters")
    private String password;

    public User(String name, String email, String phone, String username, String password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }




    public String getUsername() {
        return username;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public Long getId() {
        return id;
    }

    public User setId(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public User setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public User setPhone(String phone) {
        this.phone = phone;
        return this;
    }
}
