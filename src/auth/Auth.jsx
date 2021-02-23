import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            
                <Grid container item xs='12'>
                    <Signup updateToken={props.updateToken} />
                </Grid>
                <Grid container item xs='12'>
                    <Login updateToken={props.updateToken}/>
                </Grid>
            
        </Container>
    )
}

export default Auth;