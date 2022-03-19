import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/View';
import { React, useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => setLoading(false));



  return (
    <>
      <Router>

        {/* Loading */}
        {loading &&
          <div className='loading'>
            <ClipLoader color='white'/>
            <h1>Loading...</h1>
          </div>
        }

        {/* View (Dynamic Page Content) */}
        {!loading &&
          <View></View>
        }



      </Router>
    </>
  );
}

export default App;
