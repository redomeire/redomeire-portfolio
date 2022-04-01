import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./style/Navbar.css";
import "../components/style/GLobal.css";
import { NavbarData } from './NavbarData';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from "../assets/avatar_logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
          <div className='Navbar' id="Navbar">
                <Toolbar sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} style={{padding: "0", overflow: "auto"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh"}}>
                    <Stack className="hero-button" variant="text" sx={{marginTop: 8}}>
                        <img className="avatar-logo" src={Avatar} alt="avatar" width="80"/>
                        <Button variant="text" sx={{marginTop: 2}}>
                            <Typography color="white" variant="h5" sx={{fontWeight: "bold", textTransform : "capitalize"}}  onClick={() => {
                            navigate("/");
                        }}>Redomeire</Typography>
                        </Button>
                        <div className="social-media" style={{marginBottom : "20px"}}>
                            <IconButton color="primary" onClick={() => { window.location.replace("https://instagram.com/red_o_21") }}>
                                <InstagramIcon/>
                            </IconButton>
                            <IconButton color="primary" onClick={() => { window.location.replace("https://www.facebook.com/redo.meire") }}>
                                <FacebookIcon/>
                            </IconButton>
                        </div>
                    </Stack>
                    {
                        NavbarData.map((item) => {
                            const address = location.pathname === item.link;
                            return(
                                <Button variant={address ? "contained" : "secondary"} 
                                color={address ? "secondary" : "primary"}
                                style={{width: "100%", height: "100%", boxShadow: "none", borderRadius: 0}} onClick={() => {
                                    // setIsClicked(true);
                                    navigate(`${item.link}`);
                                }}>
                                    <div className="item-container" style={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
                                        <div style={{marginRight: "20px"}} className={location.pathname === item.link ? "color-primary-dark" : "color-white"}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <Box component="span" sx={{p: 2}}>
                                                <Typography style={{textTransform: "capitalize"}} className={location.pathname === item.link ? "color-primary-dark" : "color-white"}>{item.title}</Typography>
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
  );
};
export default Navbar;
