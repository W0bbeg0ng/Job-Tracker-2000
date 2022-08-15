import React from "react";
import styles from './styles/style.scss';
import { Navigate } from "react-router-dom";
import Login from "./components/Login"


const LoginContainer = (props) => {
  return (
    <div>
      {isAuthenticated && (<Navigate to="/" replace={true} />)}
      <Login />
    </div>
  )
}

export default LoginContainer;

