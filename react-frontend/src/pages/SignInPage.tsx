import React from "react";
import "../styles/SignInPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  username: string;
  password: string;
}

const SignInPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // Initialize the navigate function
  const navigate = useNavigate();

  // axios post request to sign in
  const onSignIn = (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios
      .post("http://localhost:8080/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Use the navigate function to move to the "/dashboard" route
  const onClickHandler = () => {
    console.log("clicked");
    navigate("/dashboard");
  };

  return (
    <div className="main-div">
      <div className="box-div">
        <div className="box-div-child">
          <h1 className="sign-in-header">Sign In</h1>
          <form onSubmit={onSignIn}> {/* Add onSubmit event handler */}
            <input
              className="sign-in-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="sign-in-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="sign-in-button" type="submit"> {/* Add type="submit" to the button */}
              Sign In
            </button>
          </form>
        </div>
        {/* ... (other parts of the component) */}
      </div>
    </div>
  );
};

export default SignInPage;