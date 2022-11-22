
import React, { useState, useEffect, useRef } from 'react';
import { Box, Container,Snackbar, Grid,TextField, useMediaQuery, Modal, Button, Typography, CardActions, Card, CardContent,Link, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


export default function Footer() {
  const theme = useTheme();
  const isSxMatch = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));



  return (
    <Container maxWidth={false} disableGutters sx={{ background: "#252525", 
     }}>
    <Container maxWidth={false} disableGutters 
    >  
        
        <Container sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <Box sx={{
              flexGrow: 1,
            }}>  <Grid container spacing={2} className='checkGriud'
                 
              >



                <Grid container spacing={0}

                  className='footercss'
                  direction="column" item xs={12} lg={12} sm={12} md={12}
                  sx={{ display: 'flex',alignContent:'center' }}>
                    <Slide bottom >
                  <Box  sx={{flexDirection:'row'}}>
                  <Link  target={'blank'} href="https://www.linkedin.com" >
                  <LinkedInIcon
                  className='footerIcon'/>
</Link> 
                  
<Link sx={{color:'#a8a8a8',fontSize:14,marginLeft:1}} target={'blank'} href="https://mail.google.com/mail" >
<MailIcon  
 className='footerIcon'/>
</Link>
<Link sx={{color:'#a8a8a8',fontSize:14,marginLeft:1}} href="tel:+91 0000000000" arget={'blank'} >
<CallIcon  className='footerIcon'/>
</Link>
<Link sx={{color:'#a8a8a8',fontSize:14,marginLeft:1}} href="https://github.com" arget={'blank'} >
<GitHubIcon  className='footerIcon'/>
</Link>
        

         </Box>
                  
                  
                  </Slide></Grid></Grid></Box>
         


        </Container>

      </Container></Container>
  );
}
