import React from "react";
import '../styles/Dashboard.css';

// a component that is a single post styled as a post bubble with a title, content, and author

interface PostProps {
    title: string;
    content: string;
    //author: string;
    //timestamp: string;
}

// function to add a zoom animation to the post on hover
function animatePost() {
    const post = document.getElementsByClassName("post")[0];
    post.classList.add("animate__animated", "animate__zoomIn");
    setTimeout(() => {
        post.classList.remove("animate__animated", "animate__zoomIn");
    }
    , 1000);
}


// rewrite component to animate post on hover

const Post = (props: PostProps) => {
    return (
        <div className="post-container">
            <h1 className="post-title">{props.title}</h1>
            <p className="post-content">{props.content}</p>
        </div>
    );
}

export default Post;