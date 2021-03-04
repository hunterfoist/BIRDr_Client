import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Signup from './Signup';
import Login from './Login';
import { Jumbotron } from 'reactstrap';

const Auth = (props) => {

    const [showLogin, setShowLogin] = useState();

    function handleToggle(){
       
        if(showLogin === true){
            setShowLogin(false)
        } else {
            setShowLogin(true)
        }
    }


    return (
        
        
        <Container className="auth-container">
<div>
            <Jumbotron  className="w-100" style={{backgroundImage: `url('https://images.unsplash.com/photo-1562263882-29e401372525?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1532&q=80')` }}>
        <Container fluid>
          <h1 className="display-3 text-dark"  >Welcome to BIRDr</h1>
          <h2 className="lead text-dark">BIRDr is the premiere site for bird enthusiasts!</h2>
          <hr className="my-2" />
          <br/>
          <p className="text-dark">BIRDr is the premiere site for bird enthusiasts!</p>
          <br/>
          <br/>
          <br/>
          <br/>
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