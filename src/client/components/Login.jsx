// import { response } from 'express';
import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [isLoggedIn, setLoginState] = useState(null);

  async function verifyUser(event) {
      event.preventDefault();
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: event.target.elements.username.value
        }),
        });      
       ;
    if (response.status === 200) setLoginState(true);
  }
  
  async function createUser(event) {
    event.preventDefault();
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: event.target.elements.username.value
      }),
      });      
     ;
    //const data = await response.();
    console.log(response)
  }


  return (
    <div>
      {(isLoggedIn === true) && <Navigate to="/" replace={true} />}
      <label>Log In:</label>
      <form onSubmit={(e) => verifyUser(e)}>
        <input name="username" type="text" placeholder="username"></input>
        <input type='submit' value="login"></input>
      </form><br/><br/>
      <label>Sign up:</label>
      <form onSubmit={(e) => createUser(e)}>
        <input name="username" type="text" placeholder="username"></input>
        <input type='submit' value="login"></input>
      </form>
      </div>
      
    )
}

export default Login;
