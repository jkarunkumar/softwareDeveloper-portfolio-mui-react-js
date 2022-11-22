import React from 'react';
import { Container, Grid, Box, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import innerjpg from '../assets/stackBg.png'
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import stackBg from '../assets/about_shap_bg.png'


function AboutMe(props) {
    const theme = useTheme();
    const isSmMatch = useMediaQuery(theme.breakpoints.down("sm"));
    const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));

    let fontSize
    return (
        <React.Fragment>

            <Container maxWidth={false} disableGutters sx={{ backgroundColor: '#303131' }}>
                <Container>
                <Box sx={{
                    flexGrow: 1,
                    paddingTop: "20%" ,paddingTop:isLgMatch?'15%':'7%',paddingBottom:'5%',
                    
                }}>
                    
                    <Grid container spacing={2}>
                        <Grid spacing={0}
                            direction="column" item xs={12} lg={6} sx={{backgroundImage: `url(${stackBg})`,
                            backgroundSize:'cover' ,placeSelf: 'center',display:'flex',paddingTop:isSmMatch?30:0 }}>
                            <Box sx={{
                                margin: '0px auto',
                                width: isSmMatch?'70%':'25%',
                                border: '4px solid #f5af31',
                                padding: '10px 10px 20px 25px',
                            }}>
                                 <Rotate top left>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: isLgMatch ? '100%' : 'auto',
                                        objectFit: isLgMatch?'fill':'cover',
                                        height:  isLgMatch ? 'auto' : 350,
                                        border: '10px solid #444',
                                        marginTop: -5,
                                    
                                    }}
                                image={isLgMatch ? innerjpg : innerjpg}
                                alignItems='right'
                                alt="Live from space album cover"
              /></Rotate></Box>
                        </Grid>
                        <Grid container
                            spacing={0}
                            direction="column"
                            textAlign={isLgMatch ? 'center' : 'left'}
                            style={{
                                justifyContent: "center", padding: "2% 2%", alignContent: 'center',
                                alignItems: isLgMatch ? 'center' : 'auto'
                            }} item xs={12} lg={6}>
                                <Fade top>
                                 <Box sx={{ typography: isLgMatch?'h5':'h3', color: '#fff' }} className="headerLine" >About Me</Box></Fade>
                                 <Fade bottom>   <Box sx={{ typography: 'p', color: '#a8a8a8',marginTop:2 }}>Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Box> <Box sx={{ typography: 'p', color: '#a8a8a8',marginTop:2 }}>
Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam.</Box>

<Box sx={{ typography: 'p', color: '#a8a8a8',marginTop:2 }}>Software Engineer | React Developer | React Native Developer | Web Designer , Web Developer</Box>
                    </Fade>    </Grid>



                    </Grid>
                </Box>
                </Container>
            </Container>

        </React.Fragment>
    );
}

export default AboutMe;