import React from 'react'
import Button from '../Button.js';
import Modal from '../Modal.js';
import { useRef } from 'react';
import Hero from '../Hero';
import About from '../About.js';
// import Projects from '../Projects.js';
// import Footer from '../Footer.js';
// import Resume from '../Resume.js';
import Navbar from '../Navbar';
import { useState, useEffect, lazy, Suspense } from 'react';
import video from '../../videos/videoColorOverlay.mp4';


// lazy load
const Projects = lazy(() => import('../Projects.js'));
const Footer = lazy(() => import('../Footer.js'));
const Resume = lazy(() => import('../Resume.js'));


const Home = () => {
  const modalRef = useRef();

  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <div className='scrollSnapper'>

        <div id='top' className='background'>
          <div className='videoOverflow'>
            <video className='videoBackground' type="video/mp4" src={video} preload='auto' playsinline loop='true' autoplay='autoplay' muted no-controls />
          </div>
          <div className='overVideo'>
            <Navbar scrollNav={scroll}></Navbar>
            <Hero></Hero>
          </div>
        </div>

        <About></About>

        <Suspense fallback={
          <>
            <div/>
          </>
        }>


          <Projects></Projects>
          <Resume></Resume>
          <Footer></Footer>

        </Suspense>

      </div>

      {/*<div className='content'>
                <h1>testing</h1>
                <Button onClick={() => modalRef.current.open()}>testing</Button>
            </div>

            <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>*/}
    </>
  )
}

export default Home