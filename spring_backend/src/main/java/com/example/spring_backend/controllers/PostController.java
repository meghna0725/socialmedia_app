package com.example.spring_backend.controllers;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;

public class PostController {
    @GetMapping("load_posts")
    private ArrayList<String> loadPosts() {
        ArrayList<String> posts = new ArrayList<>();

        // neo4j access load posts


        return posts;
    }
}