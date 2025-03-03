import { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Account from '../../account';
import Networks from '../../Chains/Networks';
import logo from 'assets/images/logo-elo.png';
import Navbar from './Navbar';
import Contracts from '../../shared/Contracts';
import SideDrawer from './SideDrawer';
import { CustomThemeContext } from '../../../config/CustomThemeProvider.jsx';

const mainLinks = [{ label: 'Home', href: '/' }];
const presaleLink = { label: 'Pre-sale', href: '/pre-sale' };
const comingSoonLink = ['Stake'];
const moreMenuLinks = [{ label: 'About us', href: '/about' }];

const MainNavigation = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [contractsDialogOpen, setContractsDialogOpen] = useState(false);

  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const darkMode = currentTheme === 'dark';

  const handleContractsDialogToggle = () => {
    setContractsDialogOpen(!contractsDialogOpen);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleThemeToggle = () => {
    setTheme(darkMode ? 'light' : 'dark');
  };

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="inherit"
        enableColorOnDark
        elevation={0}
        sx={{ bgcolor: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(20px)' }}
      >
        <Toolbar sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginRight: 'auto' }}>
            <Link to="/" style={{ marginRight: 'auto' }}>
              <img src={logo} alt="ELO logo" width="35" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navbar
              mainLinks={mainLinks}
              moreMenuLinks={moreMenuLinks}
              comingSoonLink={comingSoonLink}
              presaleLink={presaleLink}
              handleClickContracts={handleContractsDialogToggle}
            />
          </Box>
          <Box sx={{ marginLeft: 'auto' }}>
            <Networks />
          </Box>
          <Box sx={{ ml: 1 }}>
            <Account />
          </Box>

          <Box sx={{ ml: 2 }}>
            <Button
              onClick={handleThemeToggle}
              size="small"
              variant="outlined"
              startIcon={darkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              sx={{
                px: 2,
                py: 1,
                borderRadius: '24px',
                backgroundColor: 'background.paper',
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                }
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <SideDrawer
        mainLinks={mainLinks}
        presaleLink={presaleLink}
        moreMenuLinks={moreMenuLinks}
        comingSoonLink={comingSoonLink}
        onClose={handleDrawerToggle}
        open={mobileDrawerOpen}
        handleClickContracts={handleContractsDialogToggle}
      />

      {/* Contracts Dialog */}
      <Contracts
        open={contractsDialogOpen}
        handleClose={handleContractsDialogToggle}
      />
    </Fragment>
  );
};

export default MainNavigation;
