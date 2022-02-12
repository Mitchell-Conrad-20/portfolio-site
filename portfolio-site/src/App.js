import './App.css';
import Navbar from './components/Navbar.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';

function App() {
  return (
    <>
    <Navbar></Navbar>
    
    <div className='content'>
      <h1>testing</h1>
      <Button linkTo='/'>testing</Button>
      <Modal><h1 id='modalText'>Contact</h1></Modal>

    </div>
    </>
  );
}

export default App;
