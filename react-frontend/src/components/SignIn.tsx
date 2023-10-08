import React from "react";

const SignIn = () => {

    // button on click event
    function onClick() {
        console.log("button clicked");
        console.log("username: " + (document.querySelector("input[type=text]") as HTMLInputElement).value);
    }

  return (
    <div>
      <h1>Sign In</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={onClick}>Sign In</button>
    </div>
  );
};

export default SignIn;