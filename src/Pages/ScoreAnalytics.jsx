import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
// import "./ScoreAnalytics.css";

const ScoreAnalytics = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [testCompleted, setTestCompleted] = useState(false);
  const [scores, setScores] = useState({
    communication: 0,
    aptitude: 0,
    technical: 0,
  });

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(`https://new-quiz-repo.onrender.com/users/${username}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && data.scores) {
          setScores(data.scores);
          setTestCompleted(true);
        } else {
          setTestCompleted(false);
        }
      } catch (error) {
        console.error("Error fetching user scores:", error);
        setTestCompleted(false);
      }
    };

    fetchScores();
  }, [username]);

  return (
    <div className="score-analytics-container">
      {testCompleted ? (
        <>
          <h2>Your Test Results</h2>
          <div className="score-section">
            <p><strong>Communication Score:</strong> {scores.communication}%</p>
            <p><strong>Aptitude Score:</strong> {scores.aptitude}%</p>
            <p><strong>Technical Score:</strong> {scores.technical}%</p>
          </div>

          {/* Bar Chart */}
          <div className="chart-container">
            <Bar
              data={{
                labels: ["Communication", "Aptitude", "Technical"],
                datasets: [
                  {
                    label: "Score Percentage",
                    data: [scores.communication, scores.aptitude, scores.technical],
                    backgroundColor: ["#6372ff", "#ff9f40", "#36a2eb"],
                  },
                ],
              }}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </>
      ) : (
        <div className="no-test-container">
          <img src="/assets/no-results.png" alt="No Test Taken" className="no-test-image" />
          <p>You haven't taken the test yet!</p>
          <button className="start-test-btn" onClick={() => navigate(`/assessment/${username}`)}>
            Take the Test
          </button>
        </div>
      )}
    </div>
  );
};

export default ScoreAnalytics;
