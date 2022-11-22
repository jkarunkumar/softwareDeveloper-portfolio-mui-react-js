import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, useMediaQuery, Modal, Button, Typography, CardActions, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fade from 'react-reveal/Fade';
import hire from '../assets/headerBg.png'
import reactlogo from '../assets/react-seeklogo.com.svg'
import reactNativelogo from '../assets/react-native-seeklogo.com.svg'
import reduxlogo from '../assets/redux.png'
import muilogo from '../assets/mui.png'
import jslogo from '../assets/js.png'
import xcode from '../assets/xcode.png'
import Ios from '../assets/ios.png'
import android from '../assets/android.png'
import blockChain from '../assets/blockchain.png'
import metamask from '../assets/metamask.png'
import wallet from '../assets/walletconnect-seeklogo.com.svg'
import npm from '../assets/npm.png'
import paypal from '../assets/paypal.png'
import sass from '../assets/sass.png'
import htmllogo from '../assets/html.png'
import csslogo from '../assets/css.png'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
export const stacks = [
  {
    id: 0,
    icon: reactlogo, // 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    id: 1,
    icon: reactNativelogo,
  },
  {
    id: 2,
    icon: reduxlogo,
  },
  {
    id: 3,
    icon: muilogo,
  },
  {
    id: 4,
    icon: jslogo,
  },
  {
    id: 5,
    icon: xcode, // 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    id: 6,
    icon: Ios,
  },
  {
    id: 7,
    icon: android,
  },
  {
    id: 8,
    icon: blockChain,
  },
  {
    id: 9,
    icon: metamask,
  },
  {
    id: 10,
    icon: wallet,
  },
  {
    id: 11,
    icon: npm,
  },
  {
    id: 12,
    icon: paypal,
  },
  {
    id: 13,
    icon: sass,
  },
  {
    id: 14,
    icon: htmllogo,
  },
  {
    id: 15,
    icon: csslogo,
  },
];
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function Expertise() {
  const theme = useTheme();
  const isSxMatch = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container maxWidth={false} disableGutters sx={{
      background: "#2a2a2a",
    }}>
      <Container maxWidth={false} disableGutters 
      sx={{ backgroundImage: `url(${hire})`,backgroundSize:'cover'
    }}
      >
        <Container sx={{  paddingBottom: 5 }}>

          <Fade left>
            <Box sx={{ typography: isLgMatch ? 'h5' : 'h3', color: '#fff', textAlign: 'center', paddingBottom: 10,paddingTop:isLgMatch?'15%':'7%' }}
            className="headerLine" >Work Expertise</Box>
          </Fade>{/* <Time/> */}
        
          
            <Box sx={{
              flexGrow: 1,
            }}>
<Fade top>
            <Box sx={{ typography: isLgMatch ? 'h6' : 'p', color: '#fff', textAlign: 'center',paddingBottom:5,margin:'0px auto',width:'50%' }} >
              Yes, I'm a Front End Developer. Experienced with all stages of the development cycle for dynamic web projects.</Box></Fade>
              <Grid container spacing={2} className='checkGriud'
                 sx={{padding:isLgMatch? 'auto':'0% 15%'}}
              >



                <Grid container spacing={0}

                  className='expertise'
                  direction="column" item xs={12} lg={12} sm={12} md={12}
                  sx={{ placeSelf: 'center', display: 'flex', }}>
                      <Grid container spacing={2} sx={{justifyContent:'center'}}>
                    {/* <Slide bottom >
                  <Box >
                    <Box sx={{

                      // margin: '0px auto',
                      // width: isSmMatch ? '95%' : '50%',
                    }}>

                      <CardMedia
                        component="img"
                        sx={{
                          width: isLgMatch ? '100%' : 'auto',
                          objectFit: 'cover',
                          height: 350,
                          border: '10px solid #f5af31',
                          background: '#ededed'

                        }}
                        image={isLgMatch ? stackBg : stackBg}
                        alignItems='right'
                        alt="Live from space album cover"
                      /></Box>
                  </Box>
                  </Slide> */}
                   <Zoom >
                     {stacks.map((img,i)=>(
                     <Grid container spacing={0}

                     className='expertiseLogo'
                     direction="column" item xs={12} lg={12} sm={3} md={3}
                     sx={{ placeSelf: 'center', display: 'flex'  }}
                 >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 60,
                      objectFit: 'contain',
                      height: 60,
                      background: '#2a2a2a',
                      padding: 2,
                      margin:1,
                      borderRadius:50 ,
                      boxShadow: '0 0.25em 0.5em 0 rgb(0 0 0 / 25%), 0 0.4em 1.25em 0 rgb(0 0 0 / 15%)',
                   

                    }}
                    image={img.icon}
                    alignItems='right'
                    alt="Live from space album cover"
                  /></Grid>))} </Zoom></Grid>
                </Grid>
               
                {/* <Grid container spacing={0}

                  className='expertise'
                  direction="column" item xs={12} lg={9} sm={6} md={6}
                  sx={{ placeSelf: 'center', display: 'flex' }}>


                      <Grid container spacing={2} sx={{justifyContent:'center'}}
            >
              </Grid>  
                </Grid> */}
              </Grid>
            </Box>


        </Container>

      </Container></Container>
  );
}
