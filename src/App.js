import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import getLPTheme from './getLPTheme';

import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail'
import Galeri from './pages/Galeri';
import Tematik from './pages/Tematik';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Screen from './components/Screen';
import Home from './pages/Home';
import Sitemap from './pages/profil-kelurahan/Sitemap';
import Monografi from './pages/profil-kelurahan/Monografi';
import Visimisi from './pages/profil-kelurahan/Visimisi';
import Struktur from './pages/profil-kelurahan/Struktur';
import Sarana from './pages/profil-kelurahan/Sarana';
import Sdm from './pages/profil-kelurahan/Sdm';
import Regulasi from './pages/profil-kelurahan/Regulasi';

import Berkala from './pages/daftar-informasi-publik/Berkala'
import Serta from './pages/daftar-informasi-publik/Serta'
import Setiap from './pages/daftar-informasi-publik/Setiap'
import Dikecualikan from './pages/daftar-informasi-publik/Dikecualikan'
import NotFound from './pages/NotFound';
import GaleriDetail from './pages/GaleriDetail';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const App = () => {

  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const location = useLocation();
  
  const routes = [
    "/berita",
    /^\/berita\/\d+$/,
    "/",
    "/galeri",
    /^\/galeri\/\d+$/,
    "/tematik",
    "/about",
    "/profil/sitemap",
    "/profil/monografi",
    "/profil/visi",
    "/profil/struktur",
    "/profil/sarana",
    "/profil/sumber",
    "/profil/regulasi",
    "/profil/informasi/berkala",
    "/profil/informasi/serta",
    "/profil/informasi/setiap",
    "/profil/informasi/dikecualikan",
  ];

  const isRouteDefined = routes.some((route) => {
    if (typeof route === "string") {
      return route === location.pathname;
    } 
    else if (route instanceof RegExp) {
      return route.test(location.pathname);
    }
    return false;
  });

  return (
    <>
      {isRouteDefined ? (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
          <CssBaseline />
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Box sx={{ bgcolor: 'background.default' }}>
            <Routes>
              <Route path="/berita" element={<Screen><Berita /></Screen>} />
              <Route path="/berita/:id" element={<Screen><BeritaDetail /></Screen>} />
              <Route path="/" element={<Home />} />
              <Route path="/galeri" element={<Screen><Galeri /></Screen>} />
              <Route path="/galeri/:id" element={<Screen><GaleriDetail /></Screen>} />
              <Route path="/tematik" element={<Screen><Tematik /></Screen>} />
              <Route path="/about" element={<Screen><About /></Screen>} />

              <Route path="/profil/sitemap" element={<Screen><Sitemap /></Screen>} />
              <Route path="/profil/monografi" element={<Screen><Monografi /></Screen>} />
              <Route path="/profil/visi" element={<Screen><Visimisi /></Screen>} />
              <Route path="/profil/struktur" element={<Screen><Struktur /></Screen>} />
              <Route path="/profil/sarana" element={<Screen><Sarana /></Screen>} />
              <Route path="/profil/sumber" element={<Screen><Sdm /></Screen>} />
              <Route path="/profil/regulasi" element={<Screen><Regulasi /></Screen>} />

              <Route path="/profil/informasi/berkala" element={<Screen><Berkala /></Screen>} />
              <Route path="/profil/informasi/serta" element={<Screen><Serta /></Screen>} />
              <Route path="/profil/informasi/setiap" element={<Screen><Setiap /></Screen>} />
              <Route path="/profil/informasi/dikecualikan" element={<Screen><Dikecualikan /></Screen>} />
            </Routes>
          </Box>
        </ThemeProvider>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default function Wrapper({ showCustomTheme, mode, toggleColorMode }) {
  return (
    <Router>
      <App 
        showCustomTheme={showCustomTheme} 
        mode={mode} 
        toggleColorMode={toggleColorMode} 
      />
    </Router>
  );
}
