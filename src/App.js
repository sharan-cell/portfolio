
import './App.css';
import FrontPage from './FrontPage';

import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Hire from './Hire';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<FrontPage/>}/>
      
      
      <Route path="contact" element={<Hire/>}/>
        
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
