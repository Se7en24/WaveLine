import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserDashboard.css";

import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Menu, 
  MenuItem 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle"; 
import Logo from '../../Assets/Logo.jpg'; 

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); 
  const navigate = useNavigate();

  const fetchUserDetails = () => {
    setUserDetails(JSON.parse(localStorage.getItem("user")));
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const routeMap = {
    "Make a Booking": "/make-a-booking",  
    "Shipping Instructions": "/shipping-instructions",
    "Free time Detention Demurrage": "/free-time-detention-demurrage",
    "My Profile": "/profile",
    "My Bookings": "#MyBookings"
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    toast.success("Logged out successfully!");
    navigate("/", { replace: true }); 
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); 
  };

  const drawerList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Object.keys(routeMap).map((text) => (
          <ListItem button key={text} onClick={() => navigate(routeMap[text])}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="dashboard-container">
      <ToastContainer />
      <AppBar position="fixed" style={{ backgroundColor: 'white', color: '#333' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar-logo" style={{ flexGrow: 1, marginLeft: '750px' }}>
            <Link to="/dashboard">
              <img src={Logo} alt="Logo" style={{ height: '40px' }} />
            </Link>
          </div>
          <div className="navbar-menu" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>  
            <Link to="#tracking" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Tracking</Link>
            <Link to="/shipschedules" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Schedules</Link>
            <Link to="#contacts" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contacts</Link>
            
            <Button
              onClick={handleProfileClick}
              style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}
            >
              <Typography variant="subtitle1" style={{ marginRight: '10px' }}>
                {userDetails ? userDetails.name : "Guest"}
              </Typography>
              <AccountCircle style={{ fontSize: '30px', color: '#333' }} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
      <div className="header-section">
        <h1 className="main-title">Welcome to Your Dashboard</h1>
      </div>
      <div className="main-content">
        {/* Main content area */}
      </div>
    </div>
  );
};

export default Dashboard;