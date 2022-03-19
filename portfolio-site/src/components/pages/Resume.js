import React from 'react'
import myResume from '../../downloadables/MitchellConradResume.pdf';
import './Resume.css';

const Resume = () => {
  return (
    <>
        <embed className='myResume' src={myResume}/>
    </>
  )
}

export default Resume