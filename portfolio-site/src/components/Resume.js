import React from 'react';
import './Resume.css';
import Button from '../components/Button.js';
import { Link } from 'react-router-dom';
import resume from '../downloadables/MitchellConradResume.pdf';

const Resume = () => {
  return (
    <div id='resume' className='resumeContainer'>
      <br /><br /><br /><br />
      <div>
        <h1 className='sectionHeader'>Resume</h1>

        <Button><a href={resume} target="_blank" download="MitchellConradResume.pdf">Download Full Resume</a></Button>
      </div>
    </div>
  )
}

export default Resume