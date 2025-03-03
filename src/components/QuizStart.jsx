import React, { useEffect } from 'react';
import "./QuizStart.css";
import FooterContent from './FooterContent';

const QuizStart = ({ dispatch, questions, totalQuestions, index, answer, timeLeft, totalTimeLeft }) => {

    const hasAnswer = answer !== null;

    // Convert seconds into hh:mm:ss format
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className='quiz'>
            <div className='quiz_header'>
                <h2>{questions.question}</h2>
                {/* 🕒 Total Quiz Timer (Decreasing for whole quiz) */}
                <p className="timer total-time">Total Time Left: {formatTime(totalTimeLeft)}</p>
                {/* ⏳ Per Question Timer (30 sec per question) */}
                <p className="timer question-time">Question Time Left: {formatTime(timeLeft)}</p>
            </div>
            <div className='quiz_body'>
                {questions.options.map((option, idx) => (
                    <li key={option} 
                        onClick={() => dispatch({ type: "newAnswer", payload: idx })}
                        className={`${hasAnswer ? (idx === questions.correctOption ? "correct" : "wrong") : ""}`}>
                        {option}
                    </li>
                ))}
            </div>
            <div className="quiz_footer">
                <p>Number of questions: {index}/{totalQuestions}</p>
                <FooterContent dispatch={dispatch} index={index} totalQuestions={totalQuestions} />
            </div>
        </div>
    );
}

export default QuizStart;
