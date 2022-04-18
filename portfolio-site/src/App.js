import './App.css';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const loadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
      return (
        <>
          <div className='loading'>
            <ClipLoader color='#0039cb' />
            <h1>Loading...</h1>
          </div>
        </>
      )
    }
    else if (error) {
      return (
        <>
          <div className='loading'>
            <h1>Sorry, the page was unable to load. Please refresh the page to try again</h1>
          </div>
        </>
      )
    }
  }

  const View = Loadable({
    loader: () => import('./components/View'),
    loading: loadingComponent,
  });

  return (
    <>
      <Router>
          <View></View>
      </Router>
    </>
  );
}

export default App;
