import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.name) {
      setUsername(storedUser.name); // Use "name" instead of "username"
    } else {
      navigate("/start-your-journey"); // Redirect to login if user data is missing
    }
  }, [navigate]);

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <img src="/img/home.jpg" alt="PrepXpert Banner" className="banner-image" />
        <div className="banner-content">
          <h2>Welcome to PrepXpert</h2>
          <p>Enhance your skills with our interactive assessments and detailed analytics.</p>
        </div>
      </div>

      {/* Welcome Message */}
      <h2>Welcome, {username}!</h2>

      {/* Start Assessment Button */}
      <button className="start-assessment-btn" onClick={() => navigate(`/assessment/${username}`)}>
        Start Assessment
      </button>
    </div>
  );
};

export default Home;
