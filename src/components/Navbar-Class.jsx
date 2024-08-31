import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#7b34aa', // Change this to your desired color
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to Class CS-C
        </Typography>
        
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
