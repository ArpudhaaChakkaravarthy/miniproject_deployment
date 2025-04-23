import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    console.log("Login successful");
    navigate("/dashboard"); // Navigate to the Dashboard after login
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back to TaskFlow</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="login-footer">
          Don't have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
