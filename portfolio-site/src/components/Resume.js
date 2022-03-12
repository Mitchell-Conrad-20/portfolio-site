import React from 'react';
import './Resume.css';
import Button from '../components/Button.js';
import { Link } from 'react-router-dom';
import resume from '../downloadables/MitchellConradResume.pdf';
import Item from './Item';

const Resume = () => {
  return (
    <div id='resume' className='resumeContainer'>
      <br /><br /><br /><br />

      <h1 className='sectionHeader'>Skills and Technologies</h1>
      <div className='resumeContentFlexbox'>
        <Item title='Java and OOP' description='Learned Object Orient Programming in Java during CS201 and earned a 99% in the course'></Item>
        <Item title='C/C++' description='Learned C in CS101 through projects and labs. Applied knowledge of C/C++ in other courses and personal projects'></Item>
        <Item title='React.js' description='Experienced using React.js functional components and hooks for elegant and responsive web pages'></Item>
        <Item title='HTML/CSS' description='Developed experience with HTML and CSS through 12 years of learning and practice on personal projects'></Item>
      </div>

      <br /><br />
      <Button className='download'><a href={resume} target="_blank" download="MitchellConradResume.pdf"><h2>Download Full Resume</h2></a></Button>
      <br /><br />

      <h1 className='sectionHeader'>Work Experience</h1>
      <div className='resumeContentFlexbox'>

        <Item title='Software Engineering Co-op' description='Becton Dickinson - Starting May 2022'></Item>
        <Item title='Computer Science Tutor' description='York College of Pennsylvania'></Item>
        <Item title='Head Lifeguard' description='YMCA of the Greater Brandywine Valley'></Item>
        <Item title='Counselor in Training' description='Camp Horseshoe, Horseshoe Scout Reservation'></Item>


      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Resume