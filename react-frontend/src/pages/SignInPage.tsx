import React from "react";
import "../styles/SignInPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  username: string;
  password: string;
}

// TODO add three.js animation to title
const Title = () => {
  return (
    <div className="title-div">
      <h1 className="title">myworld</h1>
    </div>
  );
};

const SignInPage = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  // axios post request to sign in
  const onSignIn = () => {
    axios
      .post("http://localhost:5000/signin", {
        username: "test",
        password: "test",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCreateAccount = () => {
    axios
      .post("http://localhost:5000/createaccount", {
        username: "test",
        password: "test",
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
          <form>
            <input className="sign-in-input" type="text" placeholder="Username" />
            <input className="sign-in-input" type="password" placeholder="Password" />
            <button className="sign-in-button" onClick={onClickHandler}>
              Sign In
            </button>
          </form>
        </div>
        <div className="box-div-child">
          <div className="color-div">
            <h1 className="sign-up-header">Create Account</h1>
            <form>
              <input className="sign-in-input" type="text" placeholder="Username" />
              <input className="sign-in-input" type="password" placeholder="Password" />
              {/* <input className="sign-in-input" type="password" placeholder="Confirm Password" /> */}
              <button className="sign-in-button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
