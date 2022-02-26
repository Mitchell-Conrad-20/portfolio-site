import './Navbar.css';
import Button from './Button.js';
import { useRef } from 'react';
import Modal from './Modal';
import Hamburger from './Hamburger';

const Navbar = () =>{
    const modalRef = useRef();
    return(
        <>
        <div className='container' id='nav'>
            <ul>
                <li id='title'>Mitchell Conrad</li>
                <li className='nav-item'><Button>  Projects  </Button></li>
                <li className='nav-item'><Button>  Resume  </Button></li>
                <li id='contact' className='nav-item'><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
                <li className='hamburger'><Hamburger></Hamburger></li>
            </ul>
        </div>
        <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>
        </>
    )
}

export default Navbar;