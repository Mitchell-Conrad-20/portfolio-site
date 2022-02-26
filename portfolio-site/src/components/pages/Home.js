import React from 'react'
import Button from '../Button.js';
import Modal from '../Modal.js';
import { useRef } from 'react';

const Home = () => {
    const modalRef = useRef();

    return (
        <>
            <div className='content'>
                <h1>testing</h1>
                <Button onClick={() => modalRef.current.open()}>testing</Button>
            </div>

            <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>
        </>
    )
}

export default Home