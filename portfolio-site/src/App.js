import './App.css';
import Navbar from './components/Navbar.js';
import Button from './components/Button.js';

function App() {
  return (
    <>
    <Navbar></Navbar>

    <div className='content'>
      <h1>testing</h1>
      <Button>
        test
      </Button>
    </div>
    </>
  );
}

export default App;
