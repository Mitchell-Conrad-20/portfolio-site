import React from 'react';
import './Projects.css';
import Item from './Item.js';
import { useState, useRef } from 'react';
import Modal from './Modal.js';
import Button from './Button.js';
import video from '../videos/midiSynth.mp4';

const Projects = () => {
  const modalRef = useRef();
  const [project, setProject] = useState('');

  return (
    <>
      <div id='projects' className='projectsContainer'>
        <div className='projectsContent'>
          <br /><br /><br /><br />
          <h1>Project Portfolio</h1>

          {/* On Click of each project compoonent, a modal should popup with more details on the project  */}


          <div className='projectsFlexbox'>
            <span onClick={() => { modalRef.current.open(); setProject('portfolio') }}><Item title='Portfolio Site' description='Personal website to show off development skills using React.js' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('paperTrader') }}><Item title='Paper Trader' description='Stock brokerage and trading simulator using React.js and Firebase' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('midiSynth') }}><Item title='MIDI Synth' description='A 4 channel synthesizer driven by stepper motors with an audio visualizer. Made using Arduino' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('readingLight') }}><Item title='Automatic Reading Light' description='An efficient LED light source that turns on the light in the room is low' clickable='true'></Item></span>
            <span onClick={() => { modalRef.current.open(); setProject('waterCar') }}><Item title='Water Propelled Car' description='Water stored at a height of 1.0m is used to propell a toy car' clickable='true'></Item></span>
          </div>
        </div>

      </div>


      <Modal ref={modalRef}>
        {project === 'portfolio' &&
          <div className='projectsModalContent'>
            <h1>Portfolio</h1>
          </div>
        }
        {project === 'paperTrader' &&
          <div className='projectsModalContent'>
            <h1>PaperTrader</h1>
            <a href='https://github.com/mobrien13/paper-trader' target='_blank'><Button className='lightButton'>Source Code</Button></a>
          </div>
        }
        {project === 'midiSynth' &&
          <div className='projectsModalContent'>
            <h1>MIDI Synth</h1>
            {/* <video className='midiVideo' preload='true' src={video} autoplay muted controls/> */}
            <iframe className='midiVideo' src={video} loading='eager'/>
          </div>
        }
        {project === 'readingLight' &&
          <div className='projectsModalContent'>
            <h1>Automatic Reading Light</h1>
          </div>
        }
        {project === 'waterCar' &&
          <div className='projectsModalContent'>
            <h1>Water Propelled Car</h1>
          </div>
        }
      </Modal>
    </>
  )
}

export default Projects;