import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/LandingPage/Landingpage';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Project from './pages/myProject/Project';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getDesignTokens} from './components/Theme';
import PageNotFound from './components/PageNotFound';
import React from 'react';

export const ColorModeContext = React.createContext({
  isDark: false,
  setIsDark: (val) => { }
})

function App() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (window.localStorage.getItem('theme') === 'dark') setIsDark(true);
    else setIsDark(false);
  }, [])

  return (
    <ThemeProvider theme={createTheme(getDesignTokens(isDark ? 'dark' : 'light'))}>
      <div className="App">
        <ColorModeContext.Provider value={{ isDark, setIsDark }}>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route path="*" element={<PageNotFound value="not found" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </ColorModeContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
