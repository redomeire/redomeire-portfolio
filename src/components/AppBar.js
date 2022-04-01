import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./style/AppBar.css";
import { NavbarData } from "./NavbarData";
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { theme, darkTheme } from "../components/Theme";

export function handleClick(){
    const Navbar = document.getElementById("Navbar");
    Navbar.classList.toggle('slide')
}

export default function ButtonAppBar() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} className="AppBar">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              { NavbarData.map((item) => {
                  if(location.pathname === item.link){
                    return item.title;
                  }
              }) }
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}