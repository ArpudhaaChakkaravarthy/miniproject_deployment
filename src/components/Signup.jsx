import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your signup logic
    console.log("Sign up submitted");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create a TaskFlow Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account?{" "}
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
