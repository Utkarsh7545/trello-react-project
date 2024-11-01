import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import trelloLogo from '../assets/Trello-white.svg';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
        <img src={trelloLogo} alt="Trello Logo" style={{ height: '40px' }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
