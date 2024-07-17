import './App.css';

import About from './About';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import SignUp from './SignUp'
import Login from './Login';
import MiniHomePage from './MiniHomePage';
function App() {
  return (
    <div className="App">
      <Router>
        <main>
     
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/minihomepage" element={<MiniHomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
      
    
    </div>
  );
}

export default App;
