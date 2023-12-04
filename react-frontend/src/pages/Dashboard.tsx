import React from "react";
import Post from "../components/Post";
import SearchBar from "../components/Dashboard/SearchBar";
import UserInfo from "../components/Dashboard/UserInfo";
import Notifications from "../components/Dashboard/Notifications";
import CreatePost from "../components/Dashboard/CreatePost";
import Navbar from "../components/Dashboard/Navbar";
import '../styles/Dashboard.css';

const Dashboard = () => {

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
        </div>
    );
};

export default Dashboard;
