import React from "react";
import '../styles/Dashboard.css';
import '../styles/Post.css';

// a component that is a single post styled as a post bubble with a title, content, and author

interface PostProps {
    content: string;
    author: string;
    timestamp: string;
}


// rewrite component to animate post on hover

const Post = (props: PostProps) => {
    return (
        <div className="post-div">
            <p className="post-author">{props.author}</p>
            <p className="post-content">{props.content}</p>
            <p className="post-timestamp">{props.timestamp}</p>
        </div>
    );
}

export default Post;