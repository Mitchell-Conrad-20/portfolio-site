import './App.css';
import Navbar from './components/Navbar.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const modalRef = useRef();

  return (
    <>
    <Router>

      <Navbar></Navbar>
      <div className='content'>
        <h1>testing</h1>
        <Button onClick={() => modalRef.current.open()}>testing</Button>
      </div>

      <Modal ref={modalRef}><h1 id='modalText'>Contact</h1></Modal>

      <Routes>
        <Route path='/' element={<p>Test</p>}></Route>
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
