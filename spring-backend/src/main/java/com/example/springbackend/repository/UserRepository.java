package com.example.springbackend.repository;

import org.springframework.stereotype.Repository;

import com.example.springbackend.controllers.UserController;
import java.util.ArrayList;

@Repository
public interface UserRepository extends Neo4jRepository<UserController, Long>{
    public UserController findByName(String name);
    public UserController findByEmail(String email);

    // find friends of a user by name in an arraylist of Friend objects
    //public ArrayList<Friend> findFriendsByName(String name);


}
