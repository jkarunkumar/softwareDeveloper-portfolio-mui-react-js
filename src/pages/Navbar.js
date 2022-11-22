import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  CardMedia
} from "@mui/material";
import initialBg from '../assets/initialBg.png'
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import {Link} from 'react-scroll'
const Navbar = ({service,works,contatc}) => {
  console.log(service,'serices')
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
     const scrollToSection= (elementRef) =>{
      alert('hi')
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:"smooth",
        });
    }; 
  return (
    <React.Fragment>
      <AppBar className={colorChange?"backGroundAdd":'backGroundRemove'}>
        <Toolbar >
        <CardMedia
                                    component="img"
                                    sx={{
                                    width:60 
                                    }}
                                image={initialBg}
                                alignItems='right'
                                alt="Live from space album cover"
              />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
              className="customNavbar"
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                  <Link className="test6" to="timeline" spy={true} smooth={true} duration={500}>
                 <Tab  label="Experience" /> </Link>
                 <Link className="test6" to="projects" spy={true} smooth={true} duration={500}> 
                 <Tab label="Projects" />
                 </Link>
                 {/* <Link className="test6" to="expertise" spy={true} smooth={true} duration={500}>
                  <Tab label="About Us" />
                 </Link> */}
                 <Link className="test6" to="contact" spy={true} smooth={true} duration={500}>
                  <Tab label="Contact" />
                 </Link>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
