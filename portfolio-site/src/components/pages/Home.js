import React from 'react'
import Button from '../Button.js';
import Modal from '../Modal.js';
import { useRef } from 'react';
import Hero from '../Hero';
import About from '../About.js';
import Projects from '../Projects.js';
import Footer from '../Footer.js';
import Resume from '../Resume.js';

const Home = () => {
    const modalRef = useRef();

    return (
        <>

            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Resume></Resume>
            <Footer></Footer>


            {/*<div className='content'>
                <h1>testing</h1>
                <Button onClick={() => modalRef.current.open()}>testing</Button>
            </div>

            <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>*/}
        </>
    )
}

export default Home