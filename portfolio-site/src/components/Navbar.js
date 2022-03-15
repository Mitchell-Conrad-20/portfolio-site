import './Navbar.css';
import Button from './Button.js';
import { useRef, useState } from 'react';
import Modal from './Modal';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Contact from './Contact';
import { Fade } from 'react-reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = (props) => {

    const modalRef = useRef();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={props.scrollNav ? 'bar scrolled' : 'bar'}>


                {/* Main Nav for Most Devices */}
                <Fade top duration={1500}>
                    <div className='mainNav'>
                        <ul>
                            {/* <NavLink to='/' exact className='nav' style={{ textDecoration: 'none' }}> */}
                            <li id='title'><Link to='top' smooth={true} ignoreCancelEvents><button className='navTitleText'>Mitchell Conrad</button></Link></li>
                            {/* </NavLink> */}
                            <li className='nav-item'><Link to='about' spy={true} smooth={true} ignoreCancelEvents><Button scrollButton={props.scrollNav}>  About  </Button></Link></li>
                            <li className='nav-item'><Link to="projects" spy={true} smooth={true} ignoreCancelEvents><Button scrollButton={props.scrollNav}>  Projects  </Button></Link></li>
                            <li className='nav-item'><Link to="resume" spy={true} smooth={true} ignoreCancelEvents><Button scrollButton={props.scrollNav}>  Resume  </Button></Link></li>
                            <li id='contact' className='nav-item'><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
                        </ul>
                    </div>
                </Fade>


                {/* Nav for Mobile Devices */}
                <div className='mobileNav'>
                    <ul className={open ? 'mobileNavUl mobileNavUlOpen' : 'mobileNavUl'}>
                        <li id='title'><Link to='top' smooth={true}><button className='navTitleText'>Mitchell Conrad</button></Link></li>
                        <li className='hamburger'><Hamburger onClick={() => setOpen(!open)} scrollButton={props.scrollNav}></Hamburger></li>

                        {open &&
                            <>
                                {/* <Fade duration={1500}> */}
                                {/* TODO: Animate the entire menu not just buttons fading */}
                                <motion.div className='mobileNavLinks'
                                    initial={{
                                        opacity: 0,
                                        y: -1000
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: .2,
                                            duration: .5
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -1000
                                    }}
                                >
                                    <ul>
                                        <li><Link to='about' smooth={true} ignoreCancelEvents><Button className='mobileNavButton'>  About  </Button></Link></li>
                                        <li><Link to='projects' smooth={true} ignoreCancelEvents><Button className='mobileNavButton'>  Projects  </Button></Link></li>
                                        <li><Link to='resume' smooth={true} ignoreCancelEvents><Button className='mobileNavButton'>  Resume  </Button></Link></li>
                                        <li><Button onClick={() => modalRef.current.open()}>  Contact  </Button></li>
                                    </ul>
                                </motion.div>
                                {/* </Fade> */}
                            </>}
                    </ul>
                </div>
            </div>
            <Modal ref={modalRef}><Contact /></Modal>
        </>
    )
}

export default Navbar;