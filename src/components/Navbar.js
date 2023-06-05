import { useState, useContext } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TheatersIcon from '@mui/icons-material/Theaters';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DarkModeContext } from '../context/DarkModeContext';

const pages = ['Home', 'News', 'About', 'Contact'];

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <AppBar
      position="static"
      enableColorOnDark
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        position: 'fixed',
        top: 0,
        zIndex: 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TheatersIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOT FILMS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={page.toLowerCase()} underline="none" color="inherit">
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TheatersIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOT FILMS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                <Link href={page.toLowerCase()} underline="none" color="inherit">
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={handleToggleDarkMode}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
