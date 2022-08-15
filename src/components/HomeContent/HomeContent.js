import React from 'react'
import Row from './Row'
import './HomeContent.css'
import SACNASUH from '../../assets/SACNASUH.png'
import outreach_navarro from '../../assets/outreach_navarro.jpg'
import houaztec from '../../assets/houaztec.jpg'

function HomeContent() {
  return (
    <>
      <div class="home">
        <div class="home-container">
          <Row title="What is SACNAS?" paragraph="SACNAS, or the Society for Advancement of Chicanos/Hispanics and Native Americans in Science, is an inclusive national organization dedicated to fostering the success of diverse scientists, from college students to professionals, in attaining research opportunities, advanced degrees, careers, and positions of leadership in Science, Technology, Engineering, and Math (STEM). SACNAS works to support the most underrepresented in STEM. For more information, please visit sacnas.org.
" img={SACNASUH}/>
          <Row title="Our mission" paragraph="The SACNAS chapter at UH celebrates, supports, and encourages true diversity in STEM, with special emphasis on helping students find meaningful connections within the UH research community, flourish intellectually, and make social connections during their time at UH. Please browse our website!

" img={outreach_navarro} imgborder='y'/>
          <Row title="Chapter Activities" paragraph="UH SACNAS engages in 3 different types of activities and events that you can participate in throughout the year. We mainly focus on cultural events that celebrate the culture and backgrounds of our chapter members, professional development events that assist our chapter members with career development, and outreach events through which our chapter works to increase support of minority students in the sciences throughout the greater Houston area

" img={houaztec} imgborder='y'/>
          <Row  title="Additional info" paragraph="At our meetings, we host guest speakers, lead statement and poster presentation workshops, assist with lab placements in addition to going on lab tours, and host socials to better connect with our members. Feel free to reach out to us (uh.sacnas@gmail.com) or the Graduate Committee at sacnas.graduate@gmail.com with any questions or concerns! You can also follow us on Instagram @uhsacnas, Facebook at University of Houston - SACNAS, and on Twitter @uh_sacnas. You are also welcome in our growing Discord community!

" img=""/>
        </div>
      </div>
    </>
  )
}

export default HomeContent