import React, { useEffect, useReducer } from 'react';
import { quizQuestions } from '../../questions';
import StartScreen from '../StartScreen';
import QuizStart from '../QuizStart';
import FinishScreen from './FinishScreen';
import "./QuizApp.css";

function reducer(state, action) {
    switch (action.type) {
        case "data-received":
            return { 
                ...state, 
                questions: action.payload, 
                status: "ready",
                totalTimeLeft: action.payload.length * 30, // Total quiz time
            };
        case "active":
            return { 
                ...state, 
                status: "active", 
                timeLeft: 30 
            };
        case "newAnswer":
            const question = state.questions[state.index];
            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        case "nextQuestions":
            return { 
                ...state, 
                index: state.index + 1, 
                answer: null, 
                timeLeft: 30 
            };
        case "finishScreen":
            return { ...state, status: "finish" };
        case "restart":
            return {
                ...state,
                status: "ready",
                index: 0,
                answer: null,
                points: 0,
                timeLeft: 30,
                totalTimeLeft: state.questions.length * 30
            };
        case "tick":
            return { 
                ...state, 
                timeLeft: state.timeLeft - 1, 
                totalTimeLeft: state.totalTimeLeft - 1 
            };
        default:
            return state;
    }
}

const initialstates = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    timeLeft: 30,
    totalTimeLeft: 0,
};

const QuizApp = () => {
    const [{ status, questions, index, answer, points, timeLeft, totalTimeLeft }, dispatch] = useReducer(reducer, initialstates);

    useEffect(() => {
        if (quizQuestions) {
            dispatch({ type: "data-received", payload: quizQuestions });
        }
    }, []);

    // Timer logic
    useEffect(() => {
        if (status === "active" && timeLeft > 0 && totalTimeLeft > 0) {
            const timer = setInterval(() => {
                dispatch({ type: "tick" });
            }, 1000);

            return () => clearInterval(timer);
        }

        if (timeLeft === 0) {
            if (index < questions.length - 1) {
                dispatch({ type: "nextQuestions" });
            } else {
                dispatch({ type: "finishScreen" });
            }
        }

        if (totalTimeLeft === 0) {
            dispatch({ type: "finishScreen" });
        }

    }, [status, timeLeft, totalTimeLeft, questions.length, index]);

    const totalQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

    return (
        <main className='container'>
            {status === "ready" && <StartScreen dispatch={dispatch} totalQuestions={totalQuestions} maxPossiblePoints={maxPossiblePoints} />}
            {status === "active" && <QuizStart questions={questions[index]} dispatch={dispatch} totalQuestions={totalQuestions} index={index + 1} answer={answer} timeLeft={timeLeft} totalTimeLeft={totalTimeLeft} />}
            {status === "finish" && <FinishScreen dispatch={dispatch} maxPossiblePoints={maxPossiblePoints} points={points} />}
        </main>
    );
}

export default QuizApp;
