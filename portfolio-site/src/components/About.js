import React from 'react'
import './About.css';
import headshotSmall from '../photos/Headshot2021Fall-small.webp';
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <>
      <div className='aboutSection'>
        <br />
        <div className='aboutBox'>
          <div className='aboutText'>
            <Fade left delay={300} duration={700}>
              <h1>About Me</h1>
              <p>I am a Junior Computer Engineering student at York College of Pennsylvania. Throughout college, I have developed skills in computer programming languages such as Java and C. I have also developed skills in circuit design, circuit analysis, and digital circuits through a variety of coursework including labs and projects.</p>
              <p></p>
              <p>It was exciting to get starting working in the industry as a software engineering intern this summer at Becton Dickinson. I am thrilled to continue to learn more about the industry and am currently pursuing a co-op for the spring of 2023. Be sure to check out my projects section to learn more about the projects that I have completed!</p>
            </Fade>
          </div>
          <div className='aboutPicture'>
            <Fade right delay={1000} duration={700}><img src={headshotSmall} id='headshot' alt='Headshot' /></Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default About