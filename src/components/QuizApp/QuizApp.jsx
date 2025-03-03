import React, { useEffect, useReducer } from 'react'
import { quizQuestions } from '../../questions';
import StartScreen from '../StartScreen';
import QuizStart from '../QuizStart';
import FinishScreen from './FinishScreen';
import "./QuizApp.css";


function reducer(state, action) {
    switch (action.type) {
        case "data-received": return { ...state, questions: action.payload, status: "ready" };
        case "active": return { ...state, status: "active" }
        case "newAnswer" : return {...state, answer: action.payload}
        case "nextQuestions" : return {...state, index : state.index+1 , answer : null }
        case "finishScreen" : return {...state, status:"finish"}

    }
}

const initialstates = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
}

const QuizApp = () => {
    const [{ status, questions, index, answer }, dispatch] = useReducer(reducer, initialstates)

    useEffect(function () {
        if (quizQuestions) {
            dispatch({ type: "data-received", payload: quizQuestions })
        }
    }, []);

    const totalQuestions = questions.length;


    return (
        <main className='container'>
            {status === "ready" && <StartScreen dispatch={dispatch} />}
            {status === "active" && <QuizStart questions={questions[index]} dispatch={dispatch} totalQuestions={totalQuestions} index={index + 1} answer={answer}/>}
            {status === "finish" && <FinishScreen/>}
        </main>
    )
}

export default QuizApp