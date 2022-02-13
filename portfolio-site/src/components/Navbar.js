import './Navbar.css';
import Button from './Button.js';
import { useRef } from 'react';
import Modal from './Modal';

const Navbar = () =>{
    const modalRef = useRef();
    return(
        <>
        <div className='container'>
            <ul>
                <li id='title'>Mitchell Conrad</li>
                <li><Button>  Projects  </Button></li>
                <li><Button>  Resume  </Button></li>
                <li id='contact'><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
            </ul>
        </div>
        <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>
        </>
    )
}

export default Navbar;