import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import View from './components/View';
import { React, useState, useEffect, Suspense, lazy } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Fade from 'react-reveal';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Router>
        

          {/* Loading */}
          {loading &&
            <div className='loading'>
              <ClipLoader color='#0039cb' />
              <h1>Loading...</h1>
            </div>
          }

          {/* View (Dynamic Page Content) */}
          {!loading &&
          <Fade bottom duration={1000}>
          
          
          <View></View>
          
          
          </Fade>
          }

        

      </Router>
    </>
  );
}

export default App;
