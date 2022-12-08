
import icon from "../pages/images/logo.png"
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from "react-router-dom";
import "./navbar.css"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = ['HOME', 'ABOUT US', "PORTFOLIO", 'CONTACT'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navig = useNavigate()

  const handleDrawerToggle = (item) => {
   
    if (item == "HOME") {
      navig("/")
    } else if (item == "ABOUT US") {
      navig("/about")
    }else if(item == "PORTFOLIO"){
      navig("/port")
    }else if(item == "CONTACT"){
      navig("/con")
    }

  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Divider />
        <List>
            {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);
const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box id="contayner" sx={{ flexGrow: 1, textAlign: "center", position: "relative", background: "black" }}>
      <Grid container justifyContent="center" spacing={1} >
        <Grid item xs={11} sm={11} md={10.5} lg={8.9} xl={7.9}  >

          <AppBar position="static" id="navbar" sx={{
            background: "#212529",
            color: "#ffc800",
            height: "auto",
            width: { xs: "100%", md: "100%", sm: "100%", xs: "100%", lg: "100%", xl: "100%" },

          }}>
            <Toolbar sx={{

            }} >
              <img src={icon} alt="" style={{

              }} />
              <Box sx={{
                width: "100%",
                textAlign: "end"
              }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 2,
                    display: { lg: "none", md: "none", sm: "none" },
                    background: "#d54ab6",
                    border: "1px solid rgba(255, 255, 255, 0.55)",
                    color: "#fff",
                    borderRadius: "0.25rem",
                    padding: "10px 15px",
                    fontSize: "12px",
                    padding: "8px",
                    fontWeight: "700"
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box sx={{
                display: { xs: 'none', sm: 'none', md: "flex", lg: "flex", sm: "flex" },
                width: { lg: "53%", md: "54%", sm: "70%" },
                marginLeft: { lg: "40%", md: "20%", sm: "10%",xl:"10%" },
                
              }}>
                {navItems.map((item) => (
                  <Button id="col1" key={item}
                    onClick={() => handleDrawerToggle(item)} sx={{
                      color: '#fff',
                      fontSize: "1rem",
                      textAlign:"center",
                      height: "80px",
                      letterSpacing: "0.0625rem",
                      width: "200px",
                      marginLeft: "-15%",
                     fontFamily:"'Montserrat', sans-serif",
                     display: { xs: 'block', md: 'block' },
                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                             
                      textAlign: "end",
                      fontWeight: "600",
                    }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Grid>
      </Grid>
    </Box>
  );
}



export default DrawerAppBar;
