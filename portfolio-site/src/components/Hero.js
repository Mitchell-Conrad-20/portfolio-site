import React from 'react'
import './Hero.css';
import Video from '../videos/video.mp4';
import Button from './Button';
import { useState, useRef } from 'react';
import Modal from './Modal.js';
import Contact from './Contact';

const Hero = () => {
    const modalRef = useRef();
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className='heroBackground'>
            <div className='heroContainer'>  
                <div className='heroText'>
                    <h1>Mitchell Conrad</h1>
                    <p>Computer Engineering Student - Graduating August 2024</p>
                    <Button onClick={() => modalRef.current.open()}>Contact</Button>
                    <br/><br/>
                </div>
            </div>
        </div>

        <Modal ref={modalRef}><Contact></Contact></Modal>
        </>
    )
}

export default Hero