import React from "react";
import Post from "../components/Post";
import SearchBar from "../components/Dashboard/SearchBar";
import UserInfo from "../components/Dashboard/UserInfo";
import Notifications from "../components/Dashboard/Notifications";
import CreatePost from "../components/Dashboard/CreatePost";
import Navbar from "../components/Dashboard/Navbar";
import '../styles/Dashboard.css';

const Dashboard = () => {

    // TODO get request to backend to get posts and # of posts

    // function to render a post component
    const render_post = () => {
        return (
            <Post content="Content" author="Author" timestamp="Timestamp" />
        );
    }

    return (
        <div className="dashboard-container">
            <Navbar />

            <div className="features-container">
                <SearchBar />
                <Notifications />
            </div>

            <div className="create-post-container">
                <CreatePost />
            </div>
            <div className="all-posts-container">
                {render_post()}
            </div>
        </div>
    );
};

export default Dashboard;
