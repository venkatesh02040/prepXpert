import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import StartYourJourney from "./components/StartYourJourney/StartYourJourney";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LoadingScreen = ({ loading }) => {
  return loading ? (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  ) : null;
};

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Show loader for 1 second
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Triggers on every route change

  return (
    <>
      <LoadingScreen loading={loading} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Header data={JsonData.Header} />
              <About data={JsonData.About} />
              <Services data={JsonData.Services} />
              <Features data={JsonData.Features} />
              <Testimonials data={JsonData.Testimonials} />
              <Contact data={JsonData.Contact} />
            </>
          }
        />
        <Route path="/start-your-journey" element={<StartYourJourney />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
