import React from 'react';
import './Projects.css';
import Button from './Button.js';
import video from '../videos/midiSynth.mp4';
import Card from './Card';
import epadsImage from '../photos/epadsProj.webp';
import { Fade } from 'react-reveal';
import Block from './Block.js';
import ece100proj from '../photos/ece100proj.webp';
import ycpHacksProj from '../photos/ycpHacks.webp';

const Projects = () => {
  return (
    <>
      <div id='projects' className='projectsContainer'>
        <div className='projectsContent'>
          <br /><br /><br /><br />

          <Fade top delay={1000} duration={500}><h1>Physical Projects</h1></Fade>

          {/* Project Cards */}
          <div className='cardFlexbox'>
            <Fade right delay={1500} duration={800}>
              <Card title='Automatic Light' image={ece100proj} alt='Automatic Reading Night Light Final Prototype' className='cardItem' flippedContent={
                <>
                  <p>My partner and I were tasked with designing a circuit and building a product that would turn on a reading light if the light level was low enough.</p>
                  <p>The circuit that we designed used the concept of voltage division and a transistor to turn on in low light instead of turning off in low light.</p>
                  <p>Our device was a huge success! It was far brighter, lasted longer, and cheaper than what was required.</p>
                </>
              }>
                <p>ECE100 Team Project - Spring 2021</p>
              </Card>
            </Fade>
            <Fade right delay={1600} duration={800}>
              <Card title='MIDI Synth' image={ycpHacksProj} alt='MIDI Synth Final Testing' className='cardItem' small={true} flippedContent={
                <>
                  <span className='midiVideo'><iframe src={video} loading='lazy' width='265' title='MIDI Synth in Action' /></span>
                  <p>A 4 channel synthesizer driven by stepper motors with an audio visualizer. The entire device was made in 36 hours on a team of 4 at YCP Hacks.</p>
                  <p>It uses stepper motors to produce different pitches and plays a live MIDI input signal. This project won the Best Hardware Hack.</p>
                </>
              }>
                <p>YCP Hacks - Fall 2021</p>
                <p>The MIDI Synthesizer was an extracurricular team project for YCP Hacks 2021, a Hackathon at York College. </p>
              </Card>
            </Fade>
            <Fade delay={1700} duration={800}>
              <Card title='Water Propelled Car' image={epadsImage} alt='Water Propelled Car Being Tested' className='cardItem' flippedContent={
                <p>Water stored at a height of 1.0m is used to propel a toy car. My partner and I designed, prototyped, tested, built, and presented our device.
                  <br />The project was also a competition between teams, and our grades were based partially upon the distance which our car traveled compared to that of the other teams.
                  <br />Our car went around 20m, which beat the other teams by quite a lot resulting in an A on the project.</p>
              }>
                <p>EPADS I Team Project - Fall 2020</p>
              </Card>
            </Fade>
          </div>


          <br /><br />
          <Fade top delay={500} duration={500}><h1>Software Projects</h1></Fade>

          {/* Project Blocks */}
          <div className='softwareProjects'>
            <Fade delay={500} duration={500}>
              <Block className='softwareProjectBlock' icon='fa fa-line-chart fa-5x' title='PaperTrader'>
                <p>Stock brokerage and trading simulator using React.js and Firebase</p>
                <a href='https://github.com/mobrien13/paper-trader' target='_blank' rel='noreferrer'>
                  <Button className='lightButton'>Source Code</Button>
                </a>
              </Block>
            </Fade>
            <Fade delay={500} duration={500}>
              <Block className='softwareProjectBlock' icon='fa fa-user-circle-o fa-5x' title='Portfolio Site'>
                <p>Personal website to show off development skills using React.js</p>
                <a href='https://github.com/Mitchell-Conrad-20/portfolio-site ' target='_blank' rel='noreferrer'>
                  <Button className='lightButton'>Source Code</Button>
                </a>
              </Block>
            </Fade>
          </div>

          <br /><br />

        </div>

      </div>
    </>
  )
}

export default Projects;