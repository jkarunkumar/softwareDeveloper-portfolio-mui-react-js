import React, { useState,useEffect } from 'react';
import { Box, Container, Grid, useMediaQuery, Modal, Button, 
  Accordion,AccordionSummary,AccordionDetails,
  Typography, Card, CardContent, CardMedia } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { steps } from '../utils/commonHelper';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GavelIcon from '@mui/icons-material/Gavel';
import Roll from 'react-reveal/Roll';

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

export default function TextMobileStepper() {
  const theme = useTheme();
  const [getID, setGedID] = useState(0);
  const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(false);
  const [seemore, setSeeMore] = React.useState(false);
  const handleOpen = (id) => {
    setGedID(id)
    setOpen(true)};
  const handleClose = () => setOpen(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
useEffect(()=>{
  console.log(getID,'egtSteps')
},[getID])
  
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };


  return (
    <Container maxWidth={false} disableGutters sx={{ background: "#303131", 
    // backgroundImage: `url(${headerjpg})`
     }}>
      <Container sx={{ paddingBottom: 10 }}>

        <Fade left>
          <Box sx={{ typography: isLgMatch ? 'h5' : 'h3', color: '#fff', textAlign: 'center', paddingBottom: 3 ,paddingTop:isLgMatch?'15%':'7%'}} 
          className="headerLine">Projects</Box>
        </Fade>{/* <Time/> */}
        <Fade right>

          <Box sx={{
            flexGrow: 1,
          }}>

            <Grid container spacing={2} className='checkGriud' sx={{marginBottom:2}}
            >

              {steps.slice(0, 6).map((step, index) => (

                <Grid container spacing={0}

                  className='singlephoto'
                  direction="column" item xs={12} lg={4} sm={6} md={6}
                  sx={{ placeSelf: 'flex-start', display: 'flex' }}>
                  <Card sx={{  }}  className="cardCSS" >
                    <step.icon className='iconMangement' />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {step.label1}
                      </Typography>
                      <Typography variant="body2" >
                        {step.description1.slice(0, 120) + '...'
                        }
                      </Typography>
                    </CardContent>
                    <Button  onClick={()=>handleOpen(step.id)} className='buttonProject' variant="contained" endIcon={<OpenInNewIcon />}>Read More</Button>

                  </Card>

                </Grid>))}

               
            </Grid>
            {/* {seemore? */}
            <Box sx={{
            flexGrow: 1,
          }}>

            <Grid container spacing={2} className='checkGriud'
            >
      <Accordion  className='accordionPortFolio'>
        <AccordionSummary
        className='accordSummaryPortFolio'
          expandIcon={<ExpandMoreIcon  className='iconProjects'/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Button  onClick={()=>setSeeMore(!seemore)} className='buttonProject' variant="contained" >See {seemore?'Less':'More'}</Button> */}

        </AccordionSummary>
        <AccordionDetails className='accordDetailsPortFolio'>
        {/* <Roll top opposite when={seemore}> */}
        <Box sx={{
            flexGrow: 1,
          }}>

            <Grid container spacing={2} className='checkGriud'
            >
    
      <Grid container spacing={0}
      
        className='singlephoto'
        direction="column" item xs={12} lg={4} sm={6} md={6}
        sx={{ placeSelf: 'flex-start', display: 'flex' }}>
        <Card sx={{  }}  className="cardCSS" >
          <SupportAgentIcon className='iconMangement' />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {steps[6].label1}
            </Typography>
            <Typography variant="body2" >
              {steps[6].description1.slice(0, 120) + '...'
              }
            </Typography>
          </CardContent>
          <Button  onClick={()=>handleOpen(steps[6].id)} className='buttonProject' variant="contained" endIcon={<OpenInNewIcon />}>Read More</Button>
      
        </Card>
      
      </Grid>
      
      <Grid container spacing={0}
      
        className='singlephoto'
        direction="column" item xs={12} lg={4} sm={6} md={6}
        sx={{ placeSelf: 'flex-start', display: 'flex' }}>
        <Card sx={{  }}  className="cardCSS" >
          <GavelIcon className='iconMangement' />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {steps[7].label1}
            </Typography>
            <Typography variant="body2" >
              {steps[7].description1.slice(0, 120) + '...'
              }
            </Typography>
          </CardContent>
          <Button  onClick={()=>handleOpen(steps[7].id)} className='buttonProject' variant="contained" endIcon={<OpenInNewIcon />}>Read More</Button>
      
        </Card>
      
      </Grid></Grid></Box>
    
      {/* </Roll> */}
        </AccordionDetails>
      </Accordion>
     
      
    </Grid></Box>
{/* :<></>} */}



          </Box></Fade>
        
          <Modal
        keepMounted
        open={open}
        className="modalCustom"
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <Rotate top left opposite when={open}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{height:isLgMatch?400:'auto'}} className='checkGriud'
            >

                <Grid container spacing={0}

                  className='singlephoto'
                  direction="column" item xs={12} lg={6}
                  sx={{ placeSelf: 'flex-start', display: 'flex' }}>
        <Box
                component="img"
                sx={{
                  width:'100%',
                  borderRadius: 2,
                  // border: '3px solid #f5af31',
                }}
                src={steps[getID].imgPath}
                alt={steps.label}
              />
               <Box sx={{   width: '100%',paddingTop:2 ,color:'#a8a8a8'}}>
              {steps[getID].description1}
            </Box>
              <Typography sx={{paddingTop:2,paddingBottom:2,color:'#f5af31'}}>{steps[getID].label3}</Typography>
      <Box sx={{  width: '100%',color:'#a8a8a8' }}>
        {steps[getID].description3}
      </Box> </Grid>
    
      <Grid container spacing={0}

className='singlephoto'
direction="column" item xs={12} lg={6}
sx={{ placeSelf: 'flex-start', display: 'flex' }}>
      <Typography sx={{paddingBottom:2,color:'#f5af31'}}>{steps[getID].label2}</Typography>
                 <Box sx={{ width: '100%',color:'#a8a8a8'  }}>
        {steps[getID].description2}</Box>
        </Grid></Grid>
        </Box></Rotate>
        </Box>
      </Modal>
          

      </Container></Container>
  );
}
