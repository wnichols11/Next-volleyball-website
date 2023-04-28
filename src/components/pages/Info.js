import React from 'react'
import '../../App.css'

export default function Info() {
    return (
        <div className='infopage'>
            <div className='title-wrapper'>
                <h1 className='infotitle'>
                Info
                </h1>
            </div>
            <div className='info-container'>
                <div className='info-body-wrapper'>
                    <p className='info-body'>
                        Practice Locations: Pier 6 (Brooklyn Bridge Park Greenway, Brooklyn, NY 11201) and Riverside Park (Riverside Dr, New York, NY 10025)
                    </p>
                </div>
            </div>
        </div>
    );
}