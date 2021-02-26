
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        BIRDr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
           method: 'POST',
           body: JSON.stringify({user: {username: username, password: password, first_name: first_name, last_name: last_name}}),
           headers: new Headers({
               'Content-Type': 'application/json'
           })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up!
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e) => setUsername(e.target.value)}
                name='username'
                value={username}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputProps={{ pattern:"(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{5,}" }}
                variant="outlined"
                required
                fullWidth
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register Now!
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already a BIRDr member? Login 
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}