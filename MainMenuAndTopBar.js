import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import {
  AppBar,
  Avatar,
  Badge,
  CssBaseline,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import profileImage from './profile.png';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook


function MainMenuAndTopBar() {
  const [activeIndex, setActiveIndex] = useState(null); // Active item state
  const navigate = useNavigate(); // Initialize useNavigate


  const handleListItemClick = (index,path) => {
    setActiveIndex(index); // Update active item state
    navigate(path); // Navigate to the specified path

  };

  const drawerWidth = 200; // Drawer width

  return (
    <div style={{ display: 'flex' }}>
      {/* CSS baseline to apply default MUI styling */}
      <CssBaseline />

      {/* AppBar for top navigation */}
      <AppBar position="fixed" style={{ zIndex: 1201 }} sx={{ backgroundColor: '#3D3D4E' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ZedSync
          </Typography>
          <Stack direction="row" spacing={2}>
            <Badge badgeContent={9} color="primary" sx={{ cursor: 'pointer' }}>
              <MessageIcon />
            </Badge>
            <Badge variant="dot" color="success" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
            <Avatar src={profileImage} />
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            height: '100vh',
            top: 64,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Main Menu */}
        <List>
          <ListItem>
            <ListItemText primary="MAIN MENU" />
          </ListItem>
          <Divider />
          {/* Menu items with icons */}
          {[
            { text: 'DASHBOARD', icon: <DashboardIcon />, path: '/', index: 0 },
            { text: 'STUDENTS', icon: <PersonIcon />, path: '/students', index: 1 },
            { text: 'PROGRAMS', icon: <LibraryBooksIcon />, path: '/programs', index: 2 },
            { text: 'COURSES', icon: <LibraryBooksIcon />, path: '/courses', index: 3 },
          ].map(({ text, icon,path, index }) => (
            <ListItemButton
              key={text}
              selected={activeIndex === index} // Determines if the item is active
              onClick={() => handleListItemClick(index,path)} // Sets active item on click
              sx={{
                color: activeIndex === index ? 'white' : 'black', // Text color for active/inactive
                backgroundColor: activeIndex === index ? '#3D3D4E' : 'transparent', // Active background color
                '&.Mui-selected': {
                  backgroundColor: '#3D3D4E !important', // Ensures the background color is always applied for selected items
                  color: 'white', // Text color when item is selected
                },
                '&:hover': {
                  backgroundColor: '#3D3D4E', // Background color on hover
                  color: 'white', // Text color on hover
                },
              }}
            >
              {icon}
              <ListItemText primary={text} sx={{ paddingLeft: '5px' }} />
            </ListItemButton>
          ))}
        </List>

        {/* Bottom side panel items */}
        <List sx={{ marginTop: '250px' }}> {/* Change to 'auto' to adjust dynamically */}
          {[
            { text: 'Log out', icon: <LogoutIcon />, index: 4 },
            { text: 'Setting', icon: <SettingsIcon />, index: 5 },
            { text: 'Help', icon: <HelpIcon />, index: 6 },
          ].map(({ text, icon, index }) => (
            <ListItemButton
              key={text}
              selected={activeIndex === index} // Determines if the item is active
              onClick={() => handleListItemClick(index)} // Sets active item on click
              sx={{
                color: activeIndex === index ? 'white' : 'black', // Text color for active/inactive
                backgroundColor: activeIndex === index ? '#3D3D4E' : 'transparent', // Active background color
                '&.Mui-selected': {
                  backgroundColor: '#3D3D4E !important', // Ensures the background color is always applied for selected items
                  color: 'white', // Text color when item is selected
                },
                '&:hover': {
                  backgroundColor: '#3D3D4E', // Background color on hover
                  color: 'white', // Text color on hover
                },
              }}
            >
              {icon}
              <ListItemText primary={text} sx={{ paddingLeft: '5px' }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default MainMenuAndTopBar;
