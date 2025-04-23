import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-lg text-center text-white w-full max-w-md">
        <h1 className="text-2xl font-bold mb-3">Welcome to TaskFlow</h1>
        <p className="mb-6 text-base">Organize. Track. Succeed.</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-purple-600 px-5 py-2 rounded-full font-semibold shadow hover:bg-purple-100 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-white text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
