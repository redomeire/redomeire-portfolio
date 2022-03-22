import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import "./style/Navbar.css"
import { NavbarData } from './NavbarData';
import { Box, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
//   const [isClicked, setIsClicked] = React.useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
      <ThemeProvider theme={theme}>
          <div className='Navbar'>
                <Toolbar sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"}} style={{padding: "0"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"}}>
                    {
                        NavbarData.map((item) => {
                            return(
                                <Button color="secondary" variant={location.pathname === item.link ? "outlined" : "primary" } style={{width: "100%", height: "100%"}} onClick={() => {
                                    // setIsClicked(true);
                                    navigate(`${item.link}`);
                                }}>
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", width: "100%"}}>
                                        <div style={{marginRight: "20px", color: "white"}}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <Box component="span" sx={{p: 2}}>
                                                <Typography color="secondary">{item.title}</Typography>
                                            </Box>
                                        </div>
                                    </div>
                                </Button>
                            );
                        })
                    }
                    </div>
                </Toolbar>
          </div>
    </ThemeProvider>
  );
};
export default Navbar;
