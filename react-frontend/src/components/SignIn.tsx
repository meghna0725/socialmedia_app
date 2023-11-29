import React, { useState } from "react";
import axios from "axios";

interface User {
    username: string;
    password: string;
}

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Update the state when the username or password inputs change
    function handleUsernameInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    // Handle the sign-in button click
    function signInClick() {
        const newUser: User = {
            username: username,
            password: password
        };

        console.log("Signing in user:", newUser)

        // Send a POST request to the server
        axios.post("http://localhost:9000/api/users/", newUser)
            .then((response) => {
                // Handle the response from the server, e.g., show a success message or redirect
                console.log("User created:", response.data);
            })
            .catch((error) => {
                // Handle errors, e.g., display an error message
                console.error("Error creating user:", error);
            });
    }

    return (
        <div>
            <h1 className="header-style">Sign In</h1>
            <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameInput}
                autoComplete="username"
            />
            <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
                autoComplete="password"
            />
            <button onClick={signInClick}>Sign In</button>
        </div>
    );
};

export default SignIn;
