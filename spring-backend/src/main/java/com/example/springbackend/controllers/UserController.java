package com.example.springbackend.controllers;

import org.springframework.stereotype.Controller;
import com.example.springbackend.models.Friend;
import java.util.ArrayList;

@Controller
public class UserController {
    
    int id;
    String name;
    String email;
    String password;
    ArrayList<Friend> friends;

    public UserController() {

    }

    public UserController(int id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.friends = new ArrayList<Friend>();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setName(String name){
        this.name= name;
    }

    public void setEmail(String email){
        this.email= email;
    }

    public void setPassword(String password){
        this.password= password;
    }

    public void addFriend(Friend friend){
        this.friends.add(friend);
    }

}
