import './Navbar.css';
import Button from './Button.js';

const Navbar = () =>{
    return(
        <div className='container'>
            <ul>
                <li id='title'>Mitchell Conrad</li>
                <li>Test1</li>
                <li>Test2</li>
                <li id='contact'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar