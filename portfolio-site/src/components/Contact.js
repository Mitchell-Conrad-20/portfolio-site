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
                    <li>Email: <a href='mailto:mconrad4@ycp.edu'>mconrad4@ycp.edu</a></li>
                    <li>Phone: <a href='tel:4845029014'>484-502-9014</a></li>
                </ul>
                <a href='https://www.linkedin.com/in/mitch-conrad/' target='_blank' rel='noreferrer' id='buttonNeedsSpace'><Button className='lightButton'>LinkedIn</Button></a>
                <a href='https://github.com/Mitchell-Conrad-20' target='_blank' rel='noreferrer'><Button className='lightButton'>GitHub</Button></a>
            </div>
        </>
    )
}

export default Contact