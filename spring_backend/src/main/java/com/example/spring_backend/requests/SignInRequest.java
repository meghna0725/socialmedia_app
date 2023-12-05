package com.example.spring_backend.requests;

public class SignInRequest {
    public String username;
    public String password;

    public SignInRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public SignInRequest() {
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }
}