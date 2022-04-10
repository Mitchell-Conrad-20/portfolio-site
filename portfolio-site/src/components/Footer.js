import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footerContainer'>

      <div className='footerFlexbox'>

        <div className='footerLeft'>
          <h2>Links</h2>
          <ul className='footerUl footerUlLeft'>
            <li><a href='https://www.linkedin.com/in/mitch-conrad/' target='_blank' className='footerLink'>LinkedIn</a></li>
            <li><a href='https://github.com/Mitchell-Conrad-20' target='_blank' className='footerLink'>GitHub</a></li>
            <li><a href='/portfolio-site/downloadables/MitchellConradResume.pdf' target='_blank' className='footerLink'>Resume</a></li>
          </ul>
        </div>

        <div className='footerCenter'>
          <Link to='top' smooth={true} ignoreCancelEvents duration={2000}>
            <i id='backToTop' class="fa fa-angle-double-up fa-5x" aria-hidden="true"></i>
          </Link>
        </div>

        <div className='footerRight'>
          <h2>Contact Info</h2>
          <ul className='footerUl'>
            <li>Email: mconrad4@ycp.edu</li>
            <li>Phone: 484-502-9014</li>
          </ul>
        </div>
      </div>

    </div>

  )
}

export default Footer