import React from 'react';

const Dashboard = () => {
  const username = localStorage.getItem('username');

  return (
    <div className="dashboard-container">
      <h2>Welcome, {username} 🎉</h2>
      <p>This is your task dashboard.</p>
    </div>
  );
};

export default Dashboard;
