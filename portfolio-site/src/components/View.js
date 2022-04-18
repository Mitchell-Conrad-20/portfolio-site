import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './Navbar.css';
import Resume from './pages/Resume.js';

const View = () => {
  return (
      <div className='mainContent'>
        {/* <Navbar scrollNav={scroll}></Navbar> */}
        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
          <Route path='/portfolio-site/downloadables/MitchellConradResume.pdf' element={<Resume></Resume>}></Route>
          <Route path='/*' element={<h1 className='loading'>Error 404 - Page Not Found</h1>}></Route>
        </Routes>
      </div>
  )
}

export default View