import * as React from 'react';
import '../../styles/Dashboard.css';

// TODO create post request to backend to create post for user

const CreatePost = () => {
    return (
        <div>
            <input className='input-post' type="text" placeholder="Title" />
            <button className='post-button' type="submit">Post</button>
        </div>
    );
};

export default CreatePost;