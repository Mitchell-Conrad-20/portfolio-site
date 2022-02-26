import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
    <>
    <Router>

      {/* Navbar (Static Page Content) */}
      <Navbar></Navbar>
    
      {/* View (Dynamic Page Content) */}
      <View></View>

      {/* Footer (Static Page Content) */}
    
    </Router>
    </>
  );
}

export default App;
