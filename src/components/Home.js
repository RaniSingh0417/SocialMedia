import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-container">
        <p>Welcome to famebook !</p>
      </div>
      <div className="home-content">
        <h3>For best user experience signup here</h3>{" "}
      </div>
      <div className="home-btn">
        <button
          type="button"
          className="btn"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
