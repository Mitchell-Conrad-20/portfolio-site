import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './Navbar.css';
import Resume from './pages/Resume.js';

const View = () => {
  // const [scroll, setScroll] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScroll(true);
  //   }
  //   else {
  //     setScroll(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);

  return (
      
      <div className='mainContent'>
        {/* <Navbar scrollNav={scroll}></Navbar> */}

        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
          <Route path='/downloadables/MitchellConradResume.pdf' element={<Resume></Resume>}></Route>
          <Route path='/*' element={<h1>Error: 404</h1>}></Route>
        </Routes>
      </div>
  )
}

export default View