import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Events</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="images/img-9.jpg"
                text="Private Lessons"
                label="Lessons"
                path='/Lessons'
                />
                 <CardItem 
                src="images/img-9.jpg"
                text="Small Group Lessons"
                label="Lessons"
                path='/Lessons'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src="images/img-9.jpg"
                text="Youth Volleyball Camp (18 under)"
                label="Camp"
                path='/services'
                />
                 <CardItem 
                src="images/img-9.jpg"
                text="Open Court, Hosted by NEXT Volleyball"
                label="Open Court"
                path='/services'
                />
                <CardItem 
                src="images/img-9.jpg"
                text="Pier 6 lessons"
                label="Lessons"
                path='/services'
                />
            </ul>
        </div>
        </div>
  
    
    </div>
  )
}

export default Cards