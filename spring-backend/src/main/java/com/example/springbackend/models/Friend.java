package com.example.springbackend.models;

public class Friend {
    int id;
    String name;
    String email;

    // constructor
    public Friend(int id, String name, String email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // getters and setters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail(){
        return email;
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

}


