import './Navbar.css';
import Button from './Button.js';

const Navbar = () =>{
    return(
        <div className='container'>
            <ul>
                <li id='title'>Mitchell Conrad</li>
                <li><Button linkTo='/'>Testing</Button></li>
                <li><Button linkTo='/'>Test 2</Button></li>
                <li id='contact'><Button linkTo='/'>Contact</Button></li>
            </ul>
        </div>
    )
}

export default Navbar