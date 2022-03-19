import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import './Navbar.css';
import video from '../videos/video.mp4';

const View = () => {
  // const [scroll, setScroll] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScroll(true);
  //   }
  //   else {
  //     setScroll(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);

  return (
    // <div id='top' className='background'>
      <div className='mainContent'>
        {/* <Navbar scrollNav={scroll}></Navbar> */}

        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
        </Routes>
      </div>
    // </div>
  )
}

export default View