import './Navbar.css';
import Button from './Button.js';
import { useRef, useState } from 'react';
import Modal from './Modal';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const modalRef = useRef();
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <div className={ props.scrollNav ? 'bar scrolled' : 'bar'}>


                {/* Main Nav for Most Devices */}

                <div className='mainNav'>
                    <ul>
                        <NavLink to='/' exact className='nav' style={{ textDecoration: 'none' }}><li id='title'>Mitchell Conrad</li></NavLink>
                        <li className='nav-item'><Button>  Projects  </Button></li>
                        <li className='nav-item'><Button>  Resume  </Button></li>
                        <li id='contact' className='nav-item'><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
                    </ul>
                </div>


                {/* Nav for Mobile Devices */}
                <div className='mobileNav'>
                    <ul>
                        <NavLink to='/' exact className='nav' style={{ textDecoration: 'none' }}><li id='title'>Mitchell Conrad</li></NavLink>
                        <li className='hamburger'><Hamburger onClick={() => setOpen(!open)}></Hamburger></li>
                        
                        {open && <>
                        <div className='mobileNavLinks'>
                            <ul>
                                <li><Button className='mobileNavButton'>  Projects  </Button></li>
                                <li><Button className='mobileNavButton'>  Resume  </Button></li>
                                <li><Button onClick={() => modalRef.current.open()} className='mobileNavButton'>  Contact  </Button></li>
                            </ul>
                        </div>
                        </>}

                    </ul>
                </div>
            </div>
            <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>
        </>
    )
}

export default Navbar;