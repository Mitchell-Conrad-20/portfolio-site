import React from 'react'
import './Contact.css';
import Button from './Button.js';

const Contact = () => {
    return (
        <>
            <div className='contactModalText'>
                <h1 id="modalText">Contact Info</h1>
                <br />
                <ul>
                    <li>Email: mconrad4@ycp.edu</li>
                    <li>Phone: 484-502-9014</li>
                </ul>
                <a href='https://www.linkedin.com/in/mitch-conrad/' target='_blank' id='buttonNeedsSpace'><Button className='lightButton'>LinkedIn</Button></a>
                <a href='https://github.com/Mitchell-Conrad-20' target='_blank'><Button className='lightButton'>GitHub</Button></a>
            </div>
        </>
    )
}

export default Contact