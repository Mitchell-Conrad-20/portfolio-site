import React from 'react';
import './Resume.css';
import Button from '../components/Button.js';
import { Link } from 'react-router-dom';
import resume from '../downloadables/MitchellConradResume.pdf';
import Item from './Item';
import { Fade, Bounce } from 'react-reveal';

const Resume = () => {
  return (
    <div id='resume' className='resumeContainer'>
      <br /><br /><br /><br />
      <div className='skillsAndTech'>
        <h1 className='sectionHeader'>Skills and Technologies</h1>
        <div className='resumeContentFlexbox'>
          <Fade right duration={1000}><Item title='Java and OOP' description='Learned Object Orient Programming in Java during CS201 and earned a 99% in the course'></Item></Fade>
          <Fade right delay={500} duration={1000}><Item title='C/C++' description='Learned C in CS101 through projects and labs. Applied knowledge of C/C++ in other courses and personal projects'></Item></Fade>
          <Fade right delay={1000} duration={1000}><Item title='React.js' description='Experienced using React.js functional components and hooks for elegant and responsive web pages'></Item></Fade>
          <Fade right delay={1500} duration={1000}><Item title='HTML/CSS' description='Developed experience with HTML and CSS through 12 years of learning and practice on personal projects'></Item></Fade>
        </div>

        <br /><br />
        <Fade bottom delay={2000} duration={1000}>
          <Button className='download'><a href={resume} target="_blank" download="MitchellConradResume.pdf"><h2>Download Full Resume</h2></a></Button>
        </Fade>
        <br /><br />
      </div>

      <div className='workExperience'>
        <h1 className='sectionHeader'>Work Experience</h1>
        <div className='resumeContentFlexbox'>
          <Item title='Software Engineering Co-op' description='Becton Dickinson - Starting May 2022' className='workExpItem'></Item>
          <Item title='Computer Science Tutor' description='York College of Pennsylvania' className='workExpItem'></Item>
          <Item title='Head Lifeguard' description='YMCA of the Greater Brandywine Valley' className='workExpItem'></Item>
          <Item title='Counselor in Training' description='Camp Horseshoe, Horseshoe Scout Reservation' className='workExpItem'></Item>
        </div>
        <br /><br /><br /><br />
      </div>
    </div>
  )
}

export default Resume