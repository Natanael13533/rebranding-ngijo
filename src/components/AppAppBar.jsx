import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import ToggleColorMode from './ToggleColorMode';

import { Link } from 'react-router-dom';

const logoStyle = {
  width: '90px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [profilAnchorEl, setProfilAnchorEl] = React.useState(null);
  const [infoAnchorEl, setInfoAnchorEl] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleProfilClick = (event) => {
    setProfilAnchorEl(event.currentTarget);
    setInfoAnchorEl(null); // Ensure the info menu closes when profiling is opened
  };

  const handleProfilClose = () => {
    setProfilAnchorEl(null);
  };

  const handleInfoClick = (event) => {
    setInfoAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setInfoAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
      handleProfilClose();
      handleInfoClose();
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src="/static/images/avatar/file.png"
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  component={Link} // Use Link as the Button's component
                  to="/" // The route to navigate to
                  // onClick={scrollToSection('home')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Beranda
                  </Typography>
                </Button>
                <Button
                  onClick={handleProfilClick}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Profil Kelurahan
                  </Typography>
                </Button>
                <Menu
                  anchorEl={profilAnchorEl}
                  open={Boolean(profilAnchorEl)}
                  onClose={handleProfilClose}
                  MenuListProps={{
                    'aria-labelledby': 'profil-button',
                  }}
                >
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/sitemap" // The route to navigate to 
                  >
                    sitemap
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/monografi" // The route to navigate to
                  >
                    Monografi statis & dinamis
                  </MenuItem>
                  <MenuItem
                    onClick={handleInfoClick}
                  >
                    Daftar Informasi Publik
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/visi" // The route to navigate to 
                    onClick={() => scrollToSection('visi-misi')}
                  >
                    Visi Misi
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/struktur" // The route to navigate to 
                    onClick={() => scrollToSection('struktur')}
                  >
                    Struktur Pemerintahan
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/sarana" // The route to navigate to 
                    onClick={() => scrollToSection('sarana')}
                  >
                    Sarana Prasarana
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/sumber" // The route to navigate to 
                    onClick={() => scrollToSection('sumber-daya')}
                  >
                    Sumber Daya Manusia
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/regulasi" // The route to navigate to 
                    onClick={() => scrollToSection('regulasi')}
                  >
                    Regulasi
                  </MenuItem>
                </Menu>
                <Menu
                  anchorEl={infoAnchorEl}
                  open={Boolean(infoAnchorEl)}
                  onClose={handleInfoClose}
                  MenuListProps={{
                    'aria-labelledby': 'info-button',
                  }}
                  PaperProps={{
                    sx: { width: 220 }, // Adjust width as needed
                  }}
                >
                  <MenuItem 
                    component={Link} // Use Link as the Button's component
                    to="/profil/informasi/berkala" // The route to navigate to 
                  >
                    Daftar Informasi Berkala
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/informasi/serta" // The route to navigate to  
                  >
                    Daftar Informasi Serta Merta
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/informasi/setiap" // The route to navigate to  
                  >
                    Daftar Informasi Setiap Saat
                  </MenuItem>
                  <MenuItem
                    component={Link} // Use Link as the Button's component
                    to="/profil/informasi/dikecualikan" // The route to navigate to  
                  >
                    Daftar Informasi Dikecualikan
                  </MenuItem>
                </Menu>
                <MenuItem
                  component={Link} // Use Link as the Button's component
                  to="/galeri" // The route to navigate to
                  onClick={() => scrollToSection('testimonials')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Galeri
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link} // Use Link as the Button's component
                  to="/tematik" // The route to navigate to
                  onClick={() => scrollToSection('highlights')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Tematik
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link} // Use Link as the Button's component
                  to="/berita" // The route to navigate to
                  onClick={() => scrollToSection('pricing')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Berita
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link} // Use Link as the Button's component
                  to="/about" // The route to navigate to
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    About Us
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
