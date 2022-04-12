import React from 'react'
import './Hero.css';
import Button from './Button';
import { useRef } from 'react';
import Modal from './Modal.js';
import Contact from './Contact';
import { Zoom, Bounce } from 'react-reveal';
import { Link } from 'react-scroll';

const Hero = () => {
    const modalRef = useRef();

    return (
        <>
            <div className='heroBackground'>
                <div className='heroContainer'>
                    <Zoom top duration={1000} delay={1300}>
                        <div className='heroText'>
                            <Bounce delay={900}><h1 id='nameHeader'>Mitchell Conrad</h1></Bounce>
                            <p>Computer Engineering Student - Graduating August 2024</p>
                            <Button onClick={() => modalRef.current.open()}>Contact</Button>
                            <br /><br />
                        </div>
                    </Zoom>
                </div>


                {/* Put the About ID here so that the link takes you to the correct spot (about is offset by a bit because of the navbar) */}
                <span id='about'></span>



                <div className='heroDownArrow'>
                    <Link to='about' smooth={true} ignoreCancelEvents duration={500}>
                        <i id='heroDownArrow' className="fa fa-angle-double-down fa-5x" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>



            <Modal ref={modalRef}><Contact></Contact></Modal>
        </>
    )
}

export default Hero