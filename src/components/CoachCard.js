import React from 'react'
import { Link } from 'react-router-dom'
import CoachCardItem from './CoachCardItem'
import './CoachCard.css'


function CoachCard() {

  const list1 = ['Career best of 41st on the AVP Pro Tour Manhattan Beach (2017) with a 45th (2014) and 57th finish (2018)',
  'Ranked in top 300 nationally (2014 - 2018)',
  'U18 Beach Junior Nationals silver bracket champion (2015)',
  '1 Sharkeys Beach Volleyball Open AVP Next Champion (2019 NY)',
  '3 Sharkeys Beach Volleyball Open AVP Next finals appearances (2018-2019 NY)',
  '4 Sharkeys Beach Volleyball Open Champion (2014 - 2017 NY)',
  '8 Sharkeys Beach Volleyball Open finals appearances (2014 - 2017 NY)'
  ]
  const walkerAccomp = list1.map(list1 => <li>{list1}</li>)
  const list2 = ['Career best of 33rd (twice) on the AVP Pro Tour (2017, 2022))',
  'Ranked between 150th and 225th nationally (2017-2022)',
  '1 California Beach Volleyball Association Open Title (2021)',
  '1 Great American Volleyball Open Title (2022)',
  '2 Open finals appearances (2021 CA, 2022 NY)',
  '4 Open semifinals appearances (2 CA, 2 NJ)'
  ]
  const chrisAccomp = list2.map(list1 => <li>{list1}</li>)
  const list3 = ['Private lessons and group coaching experience in San Luis Obispo County, California (middle school and high school ages)',
    'Group coaching experience in Redondo Beach, California (high school ages)'
    ]
  const chrisCoach = list3.map(list1 => <li>{list1}</li>)
  const list4 = [
    'Private lessons, group coaching, and volley camps in Syracuse, NY (2016-2019) (High school/Middle school ages)',
    'NYC VBA Head coach (2022-2023)(U18)',
    'Volunteer coach Club Srvy, Syracuse NY (2015) (U16 boys)',
    'Volunteer coach Syracuse Volleyball Club, Syracuse NY (2019 - 2020)', 
    '(U18, U17 boys and girls)'
  ]
const walkerCoach = list4.map(list1 => <li>{list1}</li>)
  return (
    <>
    <div className='coaches-container'>
      <h1 className='coaches-title'>
        Coaches
      </h1>
    </div>
    <div className='cards'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
             <CoachCardItem 
              src="images/profile-picture-1.jpg"
              text="Walker Nichols"
              text2="Co-founder/Coach"
              textbio="Walker Nichols graduated from Stony Brook University with a degree in Chemical Engineering in 2019. While there he ran D1 track and competed on the club volleyball team. He grew up in Encinitas, CA and moved to Syracuse, NY in middle school. He has competed semi-professionally since 2016."
              header1="Player Accomplishments:"
              header2="Coaching Experience:"
              list1={walkerAccomp}
              list2={walkerCoach}
              />
              <CoachCardItem 
              src="images/profile-picture-2.jpg"
              text="Chris Dedo"
              text2="Co-founder/Coach"
              textbio="Chris Dedo graduated from Cal Poly, San Luis Obispo with a degree in City & Regional Planning in 2020 and Columbia University with a master’s in Climate & Society in 2022. He grew up in Redondo Beach, California and started playing volleyball in nearby Hermosa Beach in 2012. He has competed semi-professionally on the beach since 2017."
              header1="Player Accomplishments:"
              header2="Coaching Experience:"
              list1={chrisAccomp}
              list2={chrisCoach}
              />
            </ul>
        </div>
        </div>
  
    
    </div>
    </>
  )
}

export default CoachCard