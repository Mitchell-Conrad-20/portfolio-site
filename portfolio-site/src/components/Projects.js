import React, { useRef } from 'react';
import './Projects.css';
import Button from './Button.js';
import video from '../videos/midiSynth.mp4';
import epadsImage from '../photos/epadsProj.webp';
import { Fade } from 'react-reveal';
import corImg from '../photos/bdCor.webp';
import ece100proj from '../photos/ece100proj.webp';
import portfolioSiteImg from '../photos/portfolioSiteImg.webp';
import paperTraderImg from '../photos/paperTrader.webp';
import ycpHacksProj from '../photos/ycpHacks.webp';
import HoverBox from './HoverBox.js';
import Modal from './Modal.js';

const Projects = () => {

  const modalRef = useRef();
  return (
    <>
      <div id='projects' className='projectsContainer'>

        <br /><br /><br /><br />

        <Fade top delay={1000} duration={500}><h1>Projects</h1></Fade>


        <div className='projectsContent'>

          {/* Project Grid */}
          <div className='projectsGrid'>

            <Fade bottom delay={500} duration={1000}>
              <HoverBox
                title="PaperTrader"
                desc="PaperTrader is a stock trading platform designed for beginners. It uses real charts and real news, but fake money. It was developed in the Spring of 2022 as a Software Engineering team project"
                content={
                  <a href='https://github.com/mobrien13/paper-trader' target='_blank' rel='noreferrer'>
                    <Button className='lightButton'>Learn More</Button>
                  </a>
                }
                src={paperTraderImg}
                alt='PaperTrader'
              />
            </Fade>

            <Fade bottom delay={600} duration={1000}>
              <HoverBox
                title='BD COR'
                desc="Worked as an R&D Software Engineering Intern on the COR Project at BD for 13 weeks. COR is a high-throughput instrument consisting of a pre-analyzer and two analyzers. Throughout the internship, I worked on fixing many SCR, PBIs, and ran tests."
                src={corImg}
                alt='BD COR Instrument'
              />
            </Fade>

            <Fade bottom delay={700} duration={1000}>
              <HoverBox
                title="Portfolio Site"
                desc="This website was developed as a self-learning project for CS320 at YCP. Since completion of the course, I've continued to make incremental changes and improvements."
                src={portfolioSiteImg}
                alt='Portfolio Site'
                content={
                  <a href='https://github.com/Mitchell-Conrad-20/portfolio-site' target='_blank' rel='noreferrer'>
                    <Button className='lightButton'>Source Code</Button>
                  </a>
                }
              />
            </Fade>

            <Fade bottom delay={1000} duration={1000}>
              <HoverBox
                title="Automatic Nightlight"
                desc="Developed an automatic nightlight for Intro to Electrical Engineering. The project was a huge success - our device outperformed the requirements by a large margin. "
                src={ece100proj}
                alt='Automatic Nightlight'
              />
            </Fade>

            <Fade bottom delay={1100} duration={1000}>
              <HoverBox
                title="MIDI Synth"
                desc="Created a 4-Channel MIDI Synthesizer made of stepper motors with a team of fellow engineers in 36 hours at YCP Hacks. The project won the Best Hardware Hack Award"
                src={ycpHacksProj}
                alt='Stepper Motor MIDI Synthesizer'
                content={
                  <Button
                    onClick={() => modalRef.current.open()}
                    className='lightButton'>
                    Watch Video
                  </Button>
                }
              />
            </Fade>

            <Fade bottom delay={1200} duration={1000}>
              <HoverBox
                title="Water Propelled Car"
                desc="My teammate and I developed a system to propel a car using the potential energy of water stored at a height of 1.0m. The final product outperformed all other teams, beating the closest by a factor of 1.5."
                src={epadsImage}
                alt='Wateer Propelled Car'
              />
            </Fade>

            <br /><br /><br />

          </div>

        </div>

      </div>

      {/* Modal */}
      <Modal ref={modalRef}>
        <iframe src={video} loading='lazy' width='265' title='MIDI Synth in Action' />
      </Modal>
    </>
  )
}

export default Projects;