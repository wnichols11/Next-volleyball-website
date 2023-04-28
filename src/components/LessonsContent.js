import React from 'react'
import './LessonsContent.css'

function LessonsContent() {
  return (
    <div className='lessons'>
            <h1 className='lessons-title'>Private Lessons</h1>
            <figure className='lessons-logo-wrapper'>
                    <img className='lessons-logo' src='images/next-black-v2-logo.jpg'></img>
            </figure>
            <div className='lessons-container'>
                <div className='lessons-wrapper'>
                <h2 className='lessons-content'>Sign up for private (1 person) or small group lessons (2 - 4 people).</h2>
                <h2 className='lessons-content'> We do adult and youth lessons</h2>
                </div>
            </div>
            <div className='lessons-btn-wrapper'>
                <button className='lessons-signup-button'>Sign up</button>
            </div>
           
        </div>
  )
}

export default LessonsContent