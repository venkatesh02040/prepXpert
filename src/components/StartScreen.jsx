import React from 'react'

const StartScreen = ({dispatch}) => {
  return (
    <div className='quiz_wrapper'>
            <h3>Welcome to </h3>
            <h2>Prepxpert Assesment</h2>
            <p>Number of questions : 0</p>
            <p>Total points : 0</p>
            <button className='btn' onClick={()=>dispatch({type : "active"})}>Let's Start the Quiz</button>
        </div>
  )
}

export default StartScreen