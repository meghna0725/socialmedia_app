import React, { useState } from 'react';
import '../../styles/Dashboard.css';
import axios from 'axios';

// TODO create post request to backend to create post for user

interface CreatePostProps {
    content: string;
    author: string;
}

// set author to default "user" for now

const CreatePost = () => {
    const [content, setContent] = useState<string>('');

    const onCreatePost = async () => {
        try {
            // Make a POST request to create a new post
            await axios.post('http://localhost:8080/create_post', {
                content: content,
                author: 'default_user',
            });
            setContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className='post-container'>
            <input
                className='input-post'
                type='text'
                placeholder='Title'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className='post-button' type='submit' onClick={onCreatePost}>
                Post
            </button>
        </div>
    );
};

export default CreatePost;
