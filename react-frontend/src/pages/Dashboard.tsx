import React from "react";
import Post from "../components/Post";

// a dashboard welcome page

// function that takes in how many posts are there and generates that many post components
function generatePosts(numPosts: number) {
    const posts = [];
    for (let i = 0; i < numPosts; i++) {
        posts.push(<Post title={"Post " + (i + 1)} content={"This is post number " + (i + 1) + "."} />);
    }
    return posts;
}


const Dashboard = () => {

    // call generatePosts to generate 5 posts
    const posts = generatePosts(3);

    // include the posts in the return statement
    return (
        <div>
            <h1 className="header-style">Welcome to the Dashboard!</h1>
            <div className="post-container">
                {posts}
            </div>
        </div>
    );
};

export default Dashboard;