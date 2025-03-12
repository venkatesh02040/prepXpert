import React from 'react';
import "./QuizStart.css";
import FooterContent from './FooterContent';

const QuizStart = ({ dispatch, questions, totalQuestions, index, answer, timeLeft, totalTimeLeft }) => {

    // Check if time is up for the current question
    const isTimeUp = timeLeft <= 0;

    // Convert seconds into hh:mm:ss format
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className='quizapp-container'>
            <div className='quizapp-header'>
                <h2>{questions.question}</h2>
                <p className="quizapp-timer total-time">Total Time Left: {formatTime(totalTimeLeft)}</p>
                <p className="quizapp-timer question-time">Question Time Left: {formatTime(timeLeft)}</p>
            </div>
            <ul className='quizapp-body'>
                {questions.options.map((option, idx) => (
                    <li key={option}
                        onClick={() => !isTimeUp && dispatch({ type: "newAnswer", payload: idx })} 
                        className={`quizapp-option ${isTimeUp ? "disabled" : ""} ${answer === idx ? "selected" : ""}`}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            <div className="quizapp-footer">
                <p>Number of questions: {index}/{totalQuestions}</p>
                <FooterContent dispatch={dispatch} index={index} totalQuestions={totalQuestions} />
            </div>
        </div>
    );
}

export default QuizStart;
