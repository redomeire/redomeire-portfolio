import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/LandingPage/Landingpage';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Project from './pages/myProject/Project';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Theme';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landingpage/>}/>
          <Route path="*" element={<PageNotFound value="not found"/>}/>
          <Route path="/profile" element={<PageNotFound value="found"/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
