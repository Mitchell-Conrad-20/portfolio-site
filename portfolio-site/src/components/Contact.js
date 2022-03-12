import React from 'react'
import './Contact.css';
import Button from './Button.js';

const Contact = () => {
    return (
        <>
        <div className='contactModalText'>
            <h1 id="modalText">Contact Info</h1>
            <ul>
                <li>Email: mconrad4@ycp.edu</li>
                <li>Cell Phone: 484-502-9014</li>
            </ul>
            <Button className='darkButton'>LinkedIn</Button>
        </div>
        </>
    )
}

export default Contact