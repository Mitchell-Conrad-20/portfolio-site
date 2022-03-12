import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div id='projects' className='projectsContainer'>
        <div className='projectsContent'>
          <br /><br /><br /><br />
          <h1>Projects</h1>
          <div className='projectsFlexbox'>
            <div className='projectsItem'>
              <h1>Project 1</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='projectsItem'>
              <h1>Project 2</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects