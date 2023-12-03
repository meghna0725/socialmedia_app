import React from "react";
import Post from "../components/Post";
import SearchBar from "../components/Dashboard/SearchBar";
import UserInfo from "../components/Dashboard/UserInfo";
import Notifications from "../components/Dashboard/Notifications";
import '../styles/Dashboard.css';

// a dashboard welcome page


const Dashboard = () => {

    // call generatePosts to generate 5 posts
    // include the posts in the return statement
    return (
        <div>
            <h1 className="header-style">Dashboard!</h1>
            <SearchBar />
            <Notifications />
            <div className="profile-info-div">
                <UserInfo name="Meghna" num_posts={3} />
            </div>
            <div className="post-container">
            </div>
        </div>
    );
};

export default Dashboard;