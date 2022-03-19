import React from 'react'
import './About.css';
import headshot from '../photos/Headshot2021Fall.webp';
import headshotSmall from '../photos/Headshot2021Fall-small.webp';
import { Fade } from 'react-reveal';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className='aboutSection'>
        <br />
        <div className='aboutBox'>
          <div className='aboutText'>
            <Fade left>
              <h1>About Me</h1>
              <p>I am a Sophomore Computer Engineering student at York College of Pennsylvania. Throughout college, I have developed skills in computer programming languages such as Java and C. I have also developed in circuit design, circuit analysis, and digital circuits, through coursework, breadboarding, labs, and projects.</p>
              <p></p>
              <p>I am dedicating my time and focus to studying computer engineering at York College. I am excited to learn more about the industry and get started working in a software engineering position this summer at Becton Dickinson. Be sure to check out my projects section to learn more about the projects that I have completed!</p>
            </Fade>
          </div>
          {/* <div className='aboutPicture'> */}
          {/* <Fade right><img src={headshot} id='headshot' /></Fade> */}
          {/* <img src={headshot} id='headshot' /> */}
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
                x: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: .2,
                  duration: 0.4
                },
                x: 0
              }}
              exit={{
                opacity: 0,
                x: 0
              }}
              className='aboutPicture'>
              <img src={headshot} id='headshot' />
            </motion.div>
          </AnimatePresence>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default About