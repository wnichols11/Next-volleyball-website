import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <h1>What's NEXT for your volleyball skills</h1>
        <p>What are you waiting for!</p>
        <div className='hero-btns'>
          <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            to='./book/:Volleyball4' //TODO set correct path
            >
                Get Started
            </Button>
            
            <Button 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            to='./info'
            >
                About Us 
            </Button>
        </div>
    </div>
  )
}

export default HeroSection