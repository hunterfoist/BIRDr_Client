import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../index.css';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';



const Splash = () => {
    

    return (
        
        <div id="main">
        <Typography variant="display3" align="center" style={{color: "#2196F3"}}>
        Quizzer
      </Typography>
      <Typography variant="display1" align="center" style={{marginTop: "40px"}}>
        Simple multiple-choice and flashcard online study tool
      </Typography>
      <div style={{width: "50%", margin: "0 auto", marginTop: "40px"}}>
      <Grid container  spacing={2} align="center" >
      <Grid item xs={4} >

      </Grid>
        <Grid item xs={2} >
<Button variant="raised" color="primary" style={{backgroundColor: "#2196F3"}}>
        Login
      </Button>
      </Grid>

      <Grid item xs={2}>
<Button variant="raised" color="primary" style={{backgroundColor: "#2196F3"}}>
        Signup
      </Button>
      </Grid>
      <Grid item xs={4} >

      </Grid>
      </Grid>
      </div>

      </div>
        
        //  <Button onClick={props.clickLogout}>Logout</Button>
                    
    )
}

export default Splash;