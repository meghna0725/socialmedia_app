import React from "react";
import '../../styles/Dashboard.css';
import axios from "axios";

interface UserProps {
    name: string;
    num_posts: number;
}

// set up post request to get user info from backend

// TODO style user profile component

const UserInfo: React.FC<UserProps> = (props): JSX.Element => {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.num_posts}</p>
        </div>
    );
};

export default UserInfo;