import React from 'react';
import './Projects.css';
import Item from './Item.js';
import { useState, useRef } from 'react';
import Modal from './Modal.js';
import Button from './Button.js';
import video from '../videos/midiSynth.mp4';
import Card from './Card';
import epadsImage from '../photos/epadsProj.jpg';
import { Fade } from 'react-reveal';
import Block from './Block.js';
import ece100proj from '../photos/ece100proj.jpg';
import ycpHacksProj from '../photos/ycpHacks.jpg';

const Projects = () => {
  const modalRef = useRef();
  const [project, setProject] = useState('');

  return (
    <>
      <div id='projects' className='projectsContainer'>
        <div className='projectsContent'>
          <br /><br /><br /><br />

          <Fade top delay={500} duration={500}><h1>Project Portfolio</h1></Fade>

          {/* Project Cards */}
          <div className='cardFlexbox'>
            <Fade right delay={1000}>
              <Card title='Automatic Light' image={ece100proj} className='cardItem' flippedContent={
                <p>Test</p>
              }>
                Test Card Text<br />testing testing testing
              </Card>
            </Fade>
            <Fade right delay={1500}>
              <Card title='MIDI Synth' image={ycpHacksProj} className='cardItem' flippedContent={
                <span className='midiVideo'><iframe src={video} loading='eager' width='265' /></span>
              }>
                <p>The MIDI Synthesizer was an extracurricular team project for YCP Hacks 2021, a Hackathon at York College. It uses stepper motors to produce different pitches and plays a live MIDI input signal. This project won the Best Hardware Hack.</p>
              </Card>
            </Fade>
            <Fade right delay={2000}>
              <Card title='Water Propelled Car' image={epadsImage} className='cardItem' flippedContent={
                <p>Test</p>
              }>
                Test Card Text<br />testing testing testing
              </Card>
            </Fade>
          </div>

          {/* Project Blocks */}
          <div className='projectBlocks'>
            <Fade delay={500} duration={1000}>
              <Block className='projectBlock' icon='fa fa-line-chart fa-5x' title='PaperTrader'>
                <p>Stock brokerage and trading simulator using React.js and Firebase</p>
                <a href='https://github.com/mobrien13/paper-trader' target='_blank'>
                  <Button className='lightButton'>Source Code</Button>
                </a>
              </Block>
            </Fade>
            <Fade delay={500} duration={1000}>
              <Block className='projectBlock' icon='fa fa-user-circle-o fa-5x' title='Portfolio Site'>
                <p>Personal website to show off development skills using React.js</p>
                <a href='https://github.com/Mitchell-Conrad-20/portfolio-site ' target='_blank'>
                  <Button className='lightButton'>Source Code</Button>
                </a>
              </Block>
            </Fade>
          </div>


          {/* On Click of each project compoonent, a modal should popup with more details on the project  */}
          {/* <div className='projectsFlexbox'>
            <span onClick={() => { modalRef.current.open(); setProject('portfolio') }}><Item title='Portfolio Site' description='Personal website to show off development skills using React.js' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('paperTrader') }}><Item title='Paper Trader' description='Stock brokerage and trading simulator using React.js and Firebase' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('midiSynth') }}><Item title='MIDI Synth' description='A 4 channel synthesizer driven by stepper motors with an audio visualizer. Made using Arduino' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('readingLight') }}><Item title='Automatic Reading Light' description='An efficient LED light source that turns on the light in the room is low' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('waterCar') }}><Item title='Water Propelled Car' description='Water stored at a height of 1.0m is used to propell a toy car' clickable='true'></Item></span>
          </div> */}
        </div>

      </div>


      <Modal ref={modalRef}>
        {project === 'portfolio' &&
          <div className='projectsModalContent'>
            <h1>Portfolio Site</h1>
            <p>This is my portfolio site which I created using React.js and animation libraries. It is full of animations and is completely responsive, so play around with it!</p>
            <a href='https://github.com/Mitchell-Conrad-20/portfolio-site ' target='_blank'><Button className='lightButton'>Source Code</Button></a>
          </div>
        }
        {project === 'paperTrader' &&
          <div className='projectsModalContent'>
            <h1>PaperTrader</h1>
            <p>My team and I developed PaperTrader for our Software Engineering class. To do so, we learned React.js for the front-end and are using Firebase for our back-end.</p>
            <a href='https://github.com/mobrien13/paper-trader' target='_blank'><Button className='lightButton'>Source Code</Button></a>
          </div>
        }
        {project === 'midiSynth' &&
          <div className='projectsModalContent'>
            <h1>MIDI Synth</h1>
            {/* <video className='midiVideo' preload='true' src={video} autoplay muted controls/> */}
            <span className='midiVideo'><iframe src={video} loading='eager' width='265' /></span>
            <p>The MIDI Synthesizer was an extracurricular team project for YCP Hacks 2021, a Hackathon at York College. It uses stepper motors to produce different pitches and plays a live MIDI input signal. This project won the Best Hardware Hack.</p>
          </div>
        }
        {project === 'readingLight' &&
          <div className='projectsModalContent'>
            <h1>Automatic Reading Light</h1>
            <p>My partner and I were tasked with designing a circuit and building a product that would turn on a reading light if the light level was low enough.</p>
          </div>
        }
        {project === 'waterCar' &&
          <div className='projectsModalContent'>
            <h1>Water Propelled Car</h1>
            <p>Worked with a partner to create a device that transfers the potential energy of water at 1.0m into kinetic energy. Together, we created the best device in the class</p>
          </div>
        }
      </Modal>
    </>
  )
}

export default Projects;