import React from 'react'
import { Link } from 'react-router-dom'


function CoachCardItem(props) {
  return (
    <>
    <li className='cards__item'>
        <div className='cards__item__link'>
        <figure className='coachcards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='' className='coachcards__item__img'/>
        </figure>
        <div className='cards__item__info'>
            <h5 className='coachcards__item__text1'>
                {props.text}
            </h5>
            <div class className='coachcards__item__text2__wrapper'>
            <h4 className='coachcards__item__text2'>
              {props.text2}
            </h4>
            </div>
            <div className='coachcards__item__textbio__wrapper'>
            <p className='coachcards__item__textbio'>
              {props.textbio}
            </p>
            </div>
            <div className='coachcards__item__ulheader__wrapper'>
            <p className='coachcard__item__ulheader'>
              {props.header1}
            </p>
            </div>
            <ul>
              <li>
              {props.list1}
              </li>
            </ul>
            <div className='coachcards__item__ulheader__wrapper'>
              <p className='coachcard__item__ulheader'>
              {props.header2}
            </p>
            </div>
              
            <ul>
              <li>
              {props.list2}
              </li>
            </ul>
        </div>
        </div>
    </li>
    </>
  )
}

export default CoachCardItem