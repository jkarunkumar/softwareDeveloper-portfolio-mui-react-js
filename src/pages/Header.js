import React from 'react';
import { Container, Grid, Box, CardMedia, useMediaQuery, useTheme,Button,Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Typewriter from 'typewriter-effect';
import headerjpg from '../assets/headerImage1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Slide from 'react-reveal/Slide';
const  Header=(props)=> {
  const theme = useTheme();
  const isSmMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const isxLMatch = useMediaQuery(theme.breakpoints.down("xl"));
  return (

    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{
   
     background: 
     isSmMatch?"#2a2a2a":
     isMdMatch?'linear-gradient( to right, #2a2a2a 0%, #2a2a2a 74%, #f5af31 26%, #f5af31 100% )':
     isLgMatch?'linear-gradient( to right, #2a2a2a 0%, #2a2a2a 74%, #f5af31 26%, #f5af31 100% )':
     isxLMatch?'linear-gradient( to right, #2a2a2a 0%, #2a2a2a 64%, #f5af31 36%, #f5af31 100% )':
     
     'linear-gradient( to right, #2a2a2a 0%, #2a2a2a 60%, #f5af31 40%, #f5af31 100% )',}}>
 <Container maxWidth={false} disableGutters >
        <Box sx={{
          flexGrow: 1,
          paddingTop:isSmMatch?"20%":'auto'
        }}>
          <Grid container spacing={2}>
          <Grid container
              spacing={0}
              direction="column"
              textAlign={isLgMatch?'center':'left'}
              style={{ justifyContent:"center",padding:"2% 2%",alignContent:'center',
              placeContent:isLgMatch?'center': 'end',
              alignItems:isLgMatch?'center':'auto',
               }} item xs={12} sm={6} lg={6}>
                <Slide left>
              <Box sx={{ typography: 'p',color:'#c1bbbb' }}>Hello,</Box>
              <Box sx={{ typography: isLgMatch?'h5':'h3', color: '#f5af31' }}>I'am Jhon Doe</Box>
              <Box sx={{ typography: 'h6', color: '#fff' }}>
                <Typewriter 
                options={{
                  autoStart:true,
                  loop:true,
                  delay:40,
                  strings:[
                    "Front End Developer",
                    "Web Designer",
                    "Mobile Application Developer"
                  ]
                }}/></Box>
              <Button sx={{
    marginTop: "4%", borderColor:'#ecbb63',color:'#f5af31',fontSize:12}} className="resumeButton" variant="outlined" endIcon={<DownloadIcon />}>
       <Link target={'blank'} className="resumeLoad"  >Resume</Link></Button>
           <Box  sx={{flexDirection:'row',paddingTop:3}}> 
           <Box  sx={{flexDirection:'row',justifyContent:'space-between',textAlign:'left'}}> 
           <LinkedInIcon sx={{ color:'#f5af31' ,fontSize:14}}/>
           <Link sx={{color:'#a8a8a8',fontSize:14,marginLeft:1}} target={'blank'} href="https://www.linkedin.com/" underline="hover">
  {'https://www.linkedin.com/'}
</Link></Box>
<Box  sx={{flexDirection:'row',justifyContent:'space-between'}}> 
<MailIcon sx={{  color:'#f5af31',fontSize:14 }}/>
           <Link sx={{color:'#a8a8a8',fontSize:14,marginLeft:1}} target={'blank'} href="https://mail.google.com/mail" underline="hover">
  {'example@gmail.com'}
</Link></Box>

<Box  sx={{flexDirection:'row',justifyContent:'space-between'}}> 
<CallIcon sx={{  color:'#f5af31',fontSize:14}}/>
           <Link sx={{color:'#a8a8a8',fontSize:14,marginLeft:1}} target={'blank'} href="tel:+91 0000000000" underline="hover">
  {'0000000000'}
</Link></Box></Box>
</Slide>
            </Grid>
             
            
            <Grid spacing={0}
              direction="column" item xs={12} lg={6} sm={6} sx={{alignSelf:'flex-end' }}>
                <Slide right>
              <CardMedia
                component="img"
                sx={{
                  width: isLgMatch ?'100%':'auto',
                  objectFit: 'contain',
                  height: isLgMatch ? 450 : 600, 
                  zIndex: 1,
                  position: "relative"
                }}
                image={isLgMatch?headerjpg:headerjpg }
                alignItems='right'
                alt="Live from space album cover"
              /></Slide>
            </Grid>
          </Grid>
        </Box>
        </Container>
      </Container>
      
    </React.Fragment>
  );
}

export default Header;