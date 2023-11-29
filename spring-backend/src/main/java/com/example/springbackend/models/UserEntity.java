package com.example.springbackend.models;

import org.springframework.data.annotation.Id;

import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;
import org.springframework.data.neo4j.core.schema.Relationship.Direction;

import java.util.ArrayList;
import java.util.List;

@Node
public class UserEntity {
    @Id
    private Long id;
    private String name;
    private String email;
    private String password;

    @Relationship(type = "FRIEND_OF")
    private List<Friend> friends;

    public UserEntity() {
        this.friends = new ArrayList<>();
    }

    public UserEntity(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.friends = new ArrayList<>();
    }

    // Getters and setters for id, name, email, and password

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Friend> getFriends() {
        return friends;
    }

    public void addFriend(Friend friend) {
        this.friends.add(friend);
    }

    public void removeFriend(Friend friend) {
        this.friends.remove(friend);
    }
}
