import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/LandingPage/Landingpage';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
