import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/View';
import { React, useState, useEffect } from 'react';

function App() {
  
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
      if(window.scrollY >= 80){
          setScroll(true);
      }
      else{
          setScroll(false);
      }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav);
  }, []);

  return (
    <>
    <Router>

      {/* Navbar (Static Page Content) */}
      <Navbar scrollNav={scroll}></Navbar>
    
      {/* View (Dynamic Page Content) */}
      <View></View>

      {/* Footer (Static Page Content) */}
    
    </Router>
    </>
  );
}

export default App;
