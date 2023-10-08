import React from "react";
import axios from "axios";

const SignIn = () => {

    // button on click event
    function signInClick() {
        console.log("button clicked");
        // store input in a variable
        // send input to backend


    }

  return (
    <div>
      <h1>Sign In</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={signInClick}>Sign In</button>
    </div>
  );
};

export default SignIn;