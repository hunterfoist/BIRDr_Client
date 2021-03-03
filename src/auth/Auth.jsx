import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle(){
       
        if(showLogin === true){
            setShowLogin(false)
        } else {
            setShowLogin(true)
        }
    }


    return (
        <Container className="auth-container">
            
                <Grid container item xs='12'>
                    {showLogin === true ? <Login updateToken={props.updateToken} handleToggle={handleToggle} /> : <Signup updateToken={props.updateToken} handleToggle={handleToggle}/>}
                </Grid>
                
                
                
        </Container>
    )
}

export default Auth;