import React from 'react';
import './Resume.css';
import Button from '../components/Button.js';
import resume from '../downloadables/MitchellConradResume.pdf';
import Item from './Item';
import { Fade } from 'react-reveal';
import ExpItem from './ExpItem';

const Resume = () => {
  return (
    <div id='resume' className='resumeContainer'>
      <br /><br /><br /><br />
      <div className='skillsAndTech'>
        <Fade top duration={1000}><h1 className='sectionHeader'>Skills and Technologies</h1></Fade>
        <div className='resumeContentFlexbox'>
          <Fade right delay={500} duration={1000}><Item title='Java and OOP' description='Learned Object Orient Programming in Java during CS201 and earned a 99% in the course'></Item></Fade>
          <Fade right delay={500} duration={1000}><Item title='C#' description='Demonstrated proficiency in writing C# code in a large and heavily abstracted codebase while interning at BD'></Item></Fade>
          <Fade right delay={1000} duration={1000}><Item title='C/C++' description='Learned C in CS101 through projects and labs. Applied knowledge of C and C++ in other courses and projects'></Item></Fade>
          <Fade right delay={500} duration={1000}><Item title='ReactJS' description='Experienced using React.js functional components and hooks for elegant and responsive web pages'></Item></Fade>
          <Fade right delay={1000} duration={1000}><Item title='HTML/CSS' description='Developed experience with HTML and CSS through 12 years of learning and practice on personal projects'></Item></Fade>
          <Fade right delay={500} duration={1000}><Item title='Circuit Analysis' description='Honed both digital and analog circuit analysis skills through a series of electrical engineering courses'></Item></Fade>
        </div>

        <br /><br />
        <Fade bottom delay={2000} duration={1000}>
          <a href={resume} target="_blank" rel='noreferrer' download="MitchellConradResume.pdf"><Button className='download'><h2>Download Full Resume</h2></Button></a>
        </Fade>
        <br /><br />
      </div>

      <div id='experience' className='workExperience'>

      <br /><br />

      <Fade top duration={1000}><h1 className='sectionHeader'>Work Experience</h1></Fade>

        <ExpItem
          title="R&D Software Engineering Intern"
          location="Becton, Dickinson and Company"
          date="May - August 2022">
          <>
            <p>&emsp;&emsp;Over the course of the 13 week internship, I expanded my skills in teamwork, problem solving, and programming. The position was in R&D, where I was a member of a scrum team on the COR project. My responsibilities included participating in scrum and the agile process, testing on instrument and simulator, investigating and fixing bugs, developing new features, and attending meetings. </p>
          </>
        </ExpItem>

        <ExpItem
          title="Computer Science Tutor"
          location="York College of Pennsylvania"
          date="February - Present 2022">
          <>
            <p>&emsp;&emsp;As a computer science tutor, I spend a few nights each week assisting students with their labs and assignments for both CS101 and CS201. These courses focus on programming basics using C and object-oriented programming in Java. Most days consist of a mix of debugging student code and explaining programming concepts to help students develop a stronger understand course material.</p>
          </>
        </ExpItem>

        <ExpItem
          title="Head Lifeguard"
          location="YMCA of Greater Brandywine Valley"
          date="June 2017 - August 2021">
          <>
            <p>&emsp;&emsp;I started as a lifeguard in June of 2017 and was promoted to head lifeguard after 2 years. As head lifeguard, responsibilities included opening or closing the pool, managing a team of lifeguards throughout the day, testing pool chemical levels and safety equipment, and ensuring the safety of everyone in the facility.</p>
          </>
        </ExpItem>

        <ExpItem
          title="Counselor in Training"
          location="Horseshoe Scout Reservation"
          date="June - August 2016">
          <>
            <p>&emsp;&emsp;Working at Camp Horseshoe taught me leadership, work ethic, perseverance, and responsibility. During staff week my duties included digging holes for sinage, repairing a gravel road, and mulching. After campers arrived, I helped teach merrit badges and assisted with events. </p>
          </>
        </ExpItem>

      </div>
    </div>
  )
}

export default Resume