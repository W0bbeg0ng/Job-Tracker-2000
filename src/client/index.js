import React from "react";
import { render } from "react-dom";
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import LoginContainer from "./LoginContainer";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginContainer />} />
      </Routes>
  </BrowserRouter>, 
document.getElementById('app'))