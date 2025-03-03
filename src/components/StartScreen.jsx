import React from 'react'

const StartScreen = ({dispatch , totalQuestions , maxPossiblePoints}) => {
  return (
    <div className='quiz_wrapper'>
            <h3>Welcome to </h3>
            <h2>Prepxpert Assesment</h2>
            <p>Number of questions : {totalQuestions}</p>
            <p>Total points : {maxPossiblePoints}</p>
            <button className='btn' onClick={()=>dispatch({type : "active"})}>Let's Start the Quiz</button>
        </div>
  )
}

export default StartScreen