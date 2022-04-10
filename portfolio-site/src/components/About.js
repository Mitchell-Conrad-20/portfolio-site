import React, { useState } from 'react'
import './About.css';
import headshotSmall from '../photos/Headshot2021Fall-small.webp';
import { Fade } from 'react-reveal';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from './Arrow';
import { Link } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className='aboutSection'>
        <br />
        <div className='aboutBox'>
          <div className='aboutText'>
            <Fade left delay={300}  duration={700}>
              <h1>About Me</h1>
              <VisibilitySensor offset={{top:100}} scrollCheck={true} onChange={() => setIsVisible(!isVisible)}>
                <p>I am a Sophomore Computer Engineering student at York College of Pennsylvania. Throughout college, I have developed skills in computer programming languages such as Java and C. I have also developed skills in circuit design, circuit analysis, and digital circuits, through coursework, breadboarding, labs, and projects.</p>
              </VisibilitySensor>
              <p></p>
              <p>I am excited to learn more about the industry and get started working in a software engineering position this summer at Becton Dickinson. Be sure to check out my projects section to learn more about the projects that I have completed!</p>
            </Fade>
          </div>
          <div className='aboutPicture'>
            <Fade right delay={1000} duration={700}><img src={headshotSmall} id='headshot' /></Fade>
          </div>
        </div>



        {/* Arrow Buttons */}
        <AnimatePresence>

          {isVisible &&
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5
                }
              }}
            >

              <div className='arrows'>
                <Link to='top' spy={true} smooth={true}><Arrow type='fa fa-arrow-circle-up fa-2x' /></Link>
                <Link to='projects' spy={true} smooth={true}><Arrow type='fa fa-arrow-circle-down fa-2x' /></Link>
              </div>

            </motion.div>
          }

        </AnimatePresence>

      </div>
    </>
  )
}

export default About