package com.example.spring_backend.entity;

import java.lang.reflect.Array;
import java.util.ArrayList;

import org.neo4j.springframework.data.core.schema.Id;
import org.neo4j.springframework.data.core.schema.Node;
import org.springframework.stereotype.Indexed;

@Node
public class UserEntity {

    @Id
    private Long id;
    private String username;
    private String password;
    
}