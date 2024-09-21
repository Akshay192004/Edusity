import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
         <h3>About University</h3>
         <h2>Nurturing Tommorow's Leaders Today</h2>
         <p>University gives young people the opportunity to develop their independence, especially if they choose to move away from home to study. 
            Living away from the comfort of home, managing their own money and balancing study and free time are all typical experiences.</p>
        <p>Going to university isn't just about studying – but you have to learn to balance your work-life ratio. You'll have time to study, and time to take up other activities. 
            Every university will have sports teams and societies that you can get involved with.</p>
      </div>
    </div>
  )
}

export default About
