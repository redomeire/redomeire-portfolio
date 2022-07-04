import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { IconButton, Switch, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AdbIcon from '@mui/icons-material/Adb';
import CustomDrawer from './CustomDrawer';
import { Link } from 'react-router-dom';
import HeroThumbnail from "../assets/hero-thumbnail.svg";
import CustomButton from './CustomButton';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darken, setDarken] = React.useState(false);
  const pages = [
    {
      name: 'My Journey',
      to: "/profile"
    },
    {
      name: 'Project',
      to: "/project"
    },
    {
      name: 'Contact',
      to: "/contact"
    }
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={0} variant='elevation' position="static" sx={{ backgroundColor: "transparent", padding: { md: "10px 40px 10px 60px", xs: "0" } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' },color: "#21A099", mr: 1 }} /> */}
          <Link to="/" style={{textDecoration: "none"}}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontSize: "30px",
                fontFamily: 'Inter',
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#21A099',
              }}
            >
              <span style={{ color: "black" }}>RE</span>
              <span>DO</span>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: "center" }}>
            <CustomDrawer pages={pages} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#21A099',
                textDecoration: 'none',
                marginLeft: "20px"
              }}
            >
              <span style={{ color: "black" }}>RE</span>
              <span>DO</span>
            </Typography>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.to} style={{ textDecoration: "none" }} key={page.name}>
                <CustomButton
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  style={{ transform: "none", boxShadow: "none", color: 'black', display: 'block', fontFamily: "Inter", textTransform: "capitalize", margin: "2px 10px 2px 10px", borderBottom: window.location.pathname === page.to ? "3px solid #ABDDDA" : "" }}
                >
                  {page.name}
                </CustomButton>
              </Link>
            ))}
          </Box>
          <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
            <Switch color="default" onChange={() => setDarken(!darken)} />
            <Brightness4Icon sx={{ color: darken ? "black" : "white" }} />
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display: { xs: "none", md: "flex" } }}>
                <Avatar alt="Remy Sharp" src={HeroThumbnail} />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
