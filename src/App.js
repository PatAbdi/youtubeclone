
import './App.css';
import { Home } from './Home/Home';
import Navbar from './Navbar/Navbar';
import WatchVideo from './WatchVideo/WatchVideo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/WatchVideo:id' element={<WatchVideo/>}>
          
          </Route>

          <Route path='/' element={ <Home />}>

          </Route>
        </Routes>
      </Router>
     
      
      
        
     
    </div>
  );
}

export default App;
