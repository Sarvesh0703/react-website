import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomarrow's Leaders Todat</h2>
         <p>Embark cutting-edge curriculum is designed to empower students
            with the knowledge, skills, and experiences needed to excel in
            the dynamic field of education. Our cutting-edge curriculum is designed to empower students
            with the knowledge, skills, and experiences.</p>
            <p>Embark cutting-edge curriculum is designed to empower students
            with the knowledge, skills, and experiences needed to excel in
            the dynamic field of education and experiences needed to excel in
            the dynamic field of education</p>
            <p>Embark cutting-edge curriculum is designed to empower students
            with the knowledge, skills, and experiences needed to excel in
            the dynamic field of education. Our cutting-edge curriculum is designed to empower students
            with the knowledge, skills, the dynamic field of education</p>
      </div>
    </div>
  )
}

export default About
