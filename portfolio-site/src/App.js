import './App.css';
import Navbar from './components/Navbar.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';
import { useRef } from 'react';

function App() {
  const modalRef = useRef();

  return (
    <>
    <Navbar></Navbar>
    <div className='content'>
      <h1>testing</h1>
      <Button onClick={() => modalRef.current.open()}>testing</Button>
    </div>

    <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>
    </>
  );
}

export default App;
