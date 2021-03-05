import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Signup from './Signup';
import Login from './Login';
import { Jumbotron } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import birdr from "../assets/birdr.png";
import { makeStyles } from '@material-ui/core/styles';


const Auth = (props) => {

    const [showLogin, setShowLogin] = useState();

    function handleToggle(){
       
        if(showLogin === true){
            setShowLogin(false)
        } else {
            setShowLogin(true)
        }
    }

    const useStyles = makeStyles((theme) => ({
        logo: {
          maxWidth: 100,
          marginRight: '20px'
        }
      }));

    const classes = useStyles();

    return (
        
        
        <Container className="auth-container">
<div>
            <Jumbotron  className="w-100" style={{backgroundImage: `url('https://images.unsplash.com/photo-1562263882-29e401372525?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1532&q=80')` }}>
        <Container fluid>
          <Typography><h1 className="display-3 text-dark"  >Welcome to BIRDr <img src={birdr} alt="logo" className={classes.logo} /></h1>
          <h2 className="lead text-dark">The premiere site for bird enthusiasts!</h2>
          <hr className="my-2" />
          <br/>
          <p className="text-dark">Here at BIRDr, we take bird watching seriously. Like, really seriously. <br></br> That's why we've created a place for you to catalog all of your prized fletchlings. <br></br></p>
          <br/>
          <br/>
          <p className="text-dark">Watch. Snap. Watch some more. The options are unlimited... <br></br></p>
          
          </Typography>
        </Container>
      </Jumbotron>
    </div>
                <Grid container item xs='12'>
                    {showLogin === true ? <Login updateToken={props.updateToken} handleToggle={handleToggle} /> : <Signup updateToken={props.updateToken} handleToggle={handleToggle}/>}
                </Grid>
                
                
                
        </Container>
    )
}

export default Auth;