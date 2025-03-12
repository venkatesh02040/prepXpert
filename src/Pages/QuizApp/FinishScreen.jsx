import React from 'react';
import "./FinishScreen.css";

const FinishScreen = ({ scores, dispatch }) => {
    return (
        <div className="finish-container">
            <h2>Quiz Completed! 🎉</h2>
            {/* <div className="score-section">
                <p>📢 Communication Score: <span>{scores.communication}</span></p>
                <p>📊 Aptitude Score: <span>{scores.aptitude}</span></p>
                <p>💻 Technical Score: <span>{scores.technical}</span></p>
                <p className="overall-score">🏆 Overall Score: <span>{scores.communication + scores.aptitude + scores.technical}</span></p>
            </div>
            <div className="btn-group">
                <button className="btn restart-btn" onClick={() => dispatch({ type: "restartQuiz" })}>
                    Restart Quiz 🔄
                </button>
                <button className="btn dashboard-btn" onClick={() => window.location.href = "/dashboard"}>
                    Go to Dashboard 📊
                </button>
            </div> */}
        </div>
    );
};

export default FinishScreen;
