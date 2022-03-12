import './Navbar.css';
import Button from './Button.js';
import { useRef, useState } from 'react';
import Modal from './Modal';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Contact from './Contact';

const Navbar = (props) => {

    const modalRef = useRef();
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <div className={ props.scrollNav ? 'bar scrolled' : 'bar'}>


                {/* Main Nav for Most Devices */}
                <div className='mainNav'>
                    <ul>
                        {/* <NavLink to='/' exact className='nav' style={{ textDecoration: 'none' }}> */}
                        <li id='title'><Link to='top' smooth={true}><button className='navTitleText'>Mitchell Conrad</button></Link></li>
                        {/* </NavLink> */}
                        <li className='nav-item'><Link to='about' spy={true} smooth={true}><Button scrollButton={ props.scrollNav }>  About  </Button></Link></li>
                        <li className='nav-item'><Link to="projects" spy={true} smooth={true}><Button scrollButton={ props.scrollNav }>  Projects  </Button></Link></li>
                        <li className='nav-item'><Link to="resume" spy={true} smooth={true}><Button scrollButton={ props.scrollNav }>  Resume  </Button></Link></li>
                        <li id='contact' className='nav-item'><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
                    </ul>
                </div>


                {/* Nav for Mobile Devices */}
                <div className='mobileNav'>
                    <ul className={open ? 'mobileNavUl mobileNavUlOpen' : 'mobileNavUl'}>
                        <li id='title'><Link to='top' smooth={true}><button className='navTitleText'>Mitchell Conrad</button></Link></li>
                        <li className='hamburger'><Hamburger onClick={() => setOpen(!open)} scrollButton={ props.scrollNav }></Hamburger></li>
                        
                        {open && <>
                        <div className='mobileNavLinks'>
                            <ul>
                                <li><Link to='about' smooth={true}><Button className='mobileNavButton'>  About  </Button></Link></li>
                                <li><Link to='projects' smooth={true}><Button className='mobileNavButton'>  Projects  </Button></Link></li>
                                <li><Link to='resume' smooth={true}><Button className='mobileNavButton'>  Resume  </Button></Link></li>
                                <li><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
                            </ul>
                        </div>
                        </>}

                    </ul>
                </div>
            </div>
            <Modal ref={modalRef}><Contact/></Modal>
        </>
    )
}

export default Navbar;