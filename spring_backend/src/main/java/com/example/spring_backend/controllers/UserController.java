package com.example.spring_backend.controllers;
import com.example.spring_backend.requests.SignInRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody SignInRequest signInRequest) {
        String username = signInRequest.getUsername();
        String password = signInRequest.getPassword();

        System.out.println("Received username: " + username);
        System.out.println("Received password: " + password);

        String responseMessage = "Received username: " + username + "\nReceived password: " + password;
        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }
}
