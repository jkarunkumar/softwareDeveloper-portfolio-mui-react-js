
import React, { useState, useEffect, useRef } from 'react';
import { Box, Container,Snackbar, Grid,TextField, useMediaQuery, Modal, Button, Typography, CardActions, Card, CardContent,Link, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { Rule } from '@mui/icons-material';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const theme = useTheme();
  const isSxMatch = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isLgMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const form = useRef();
  const[loadingForm,setLoadingForm]= useState(false)
  const [open, setOpen] = React.useState(false);
  const[value,setValue]=useState({
    message:'',
    status:'',

  })


  const onSubmit = (event) => {
    console.log({...event});
    setLoadingForm(true)
   
    const serviceId = 'Your Service Id';
    const templateId = 'Your Template Id';
    const userId = 'Your User Id';
    const templateParams = {
      ...event
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
    .then((result) => {
      setValue(prevState=>({...prevState,message:'Thanks for contacting,will reach you shortly !!',
      status:'success'}))
      setOpen(true);
      setLoadingForm(false)
      console.log(result.text);
  }, (error) => {
    setValue(prevState=>({...prevState,message:'Something went wrong',
status:'error'}))
    setLoadingForm(false)
    setOpen(true);
      console.log(error.text);
  });
  }




  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Container maxWidth={false} disableGutters sx={{ background: "#303131",
     }}>
    <Container maxWidth={false} disableGutters 
    >  
        
        <Container sx={{  paddingBottom: 5 }}>

          <Fade left>
            <Box sx={{ typography: isLgMatch ? 'h5' : 'h3', color: '#fff', textAlign: 'center', paddingBottom: 10,paddingTop:isLgMatch?'15%':'7%' }}
             className="headerLine" >Contact</Box>
          </Fade>
    
            <Box sx={{
              flexGrow: 1,
            }}>  <Grid container spacing={2} className='checkGriud'
                 
              >



                <Grid container spacing={0}

                  className='expertise'
                  direction="column" item xs={12} lg={4} sm={12} md={12}
                  sx={{ display: 'flex', }}>
                    <Slide bottom >
                  <Box >
                    <Box sx={{
                    }}>
            <Box sx={{ fontSize:26, color: '#ccc',  }} >
             Get in touch</Box>
  <Box  sx={{flexDirection:'row',paddingTop:3}}> 
           <Box  sx={{display:'flex',marginBottom:3}}> 
           <Box sx={{ typography:'p', color: '#727b86',fontWeight:'bold' }}>Address : </Box>
           <Link sx={{color:'#727b86',ypography:'p',marginLeft:1}} target={'blank'} href="https://goo.gl/maps" underline="hover">
  {'India'}
</Link></Box>
<Box  sx={{display:'flex',marginBottom:3}}> 
<Box sx={{ typography:'p', color: '#727b86',fontWeight:'bold' }}>Email : </Box>
           <Link sx={{color:'#727b86', typography:'p',marginLeft:1}} target={'blank'} href="https://mail.google.com/mail" underline="hover">
  {'example@gmail.com'}
</Link></Box>

<Box  sx={{display:'flex',marginBottom:3}}> 
<Box sx={{ typography:'p', color: '#727b86',fontWeight:'bold' }}>Contact : </Box>
           <Link sx={{color:'#727b86', typography:'p',marginLeft:1}} target={'blank'} href="tel:+91 0000000000" underline="hover">
  {'0000000000'}
</Link></Box></Box>
                      </Box>
                  </Box>
                  </Slide>
                </Grid>
               
                <Grid container spacing={0}

                  className='contactDiv'
                  direction="column" item xs={12} lg={8} sm={12} md={12}
                  sx={{ display: 'flex' }}>
              <Zoom >
             
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
              className='contactText'
              color="warning"
              sx={{width:'100%'}}
              id="outlined-basic" 
              label="Name"
              fullWidth
              name='user_name'
              autoComplete="user_name"
              // autoFocus
              {...register("user_name", { required: true })}
              margin="normal"
              error={!!errors?.user_name}
              helperText={errors?.user_name ? "Name is required" : null}
              variant="outlined"
              
        />
        <TextField
         color="warning"
        className='contactText'
        variant="outlined"
        label="Email"
        id="outlined-basic"
        fullWidth
        autoComplete="Email"
        // autoFocus
        name='user_email'
        margin="normal"
        {...register("user_email", {
          required: "Required field",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        error={!!errors?.user_email}
        helperText={errors?.user_email ? errors.user_email.message : null}
             
        />
        <TextField
        color="warning"
        className='contactText'
        sx={{width:'100%'}}
        id="outlined-basic" 
        label="Subject"
        fullWidth
        autoComplete="Subject"
        // autoFocus
        {...register("Subject", { required: true, })}
        margin="normal"
        error={!!errors?.Subject}
        helperText={errors?.Subject ? "Subject is required" : null}
        variant="outlined"
        />
        <TextField
         color="warning"
        className='contactText'

         sx={{width:'100%'}}
         id="outlined-basic" 
         label="Message"
         fullWidth
         autoComplete="message"
        //  autoFocus
         name='message'
         multiline
         rows={4}
         {...register("message", { required: true,  })}
         margin="normal"
         error={!!errors?.message}
         helperText={errors?.message ? "Message is required" : null}
         variant="outlined"
        />
         <LoadingButton  loading={loadingForm} loadingIndicator="Loading…"   type="submit" className='buttonProject' variant="contained" >Submit</LoadingButton></form>
                     </Zoom>
                    
                </Grid>
              </Grid>
            </Box>


        </Container>

      </Container>  <Snackbar
      anchorOrigin={ {vertical: 'top', horizontal: 'right'} }
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
        key={'top' + 'right'}>
          <Alert onClose={handleClose} severity={value.status} sx={{ width: '100%' }}>
       {value.message}
      </Alert></Snackbar></Container>
  );
}
