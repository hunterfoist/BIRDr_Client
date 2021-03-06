
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
import {Form, FormGroup, Label, Input}  from 'reactstrap';
import { ReactComponent as BirdrIcon } from "../assets/birdrrbracket.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import APIURL from '../helpers/environment';




const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: '#aecbea',
    },
    secondary: {
      main: '#eae3cb',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  BirdrIcon: {
    margin: theme.spacing(1),
    backgroundColor: '#c2b092',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#eae3cb',
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
        fetch(`${APIURL}/user/register`, {
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
      <SvgIcon><BirdrIcon className={classes.avatar}/></SvgIcon>
        <Typography component="h1" variant="h5">
          Sign up!
        </Typography>
        <br/>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
            <Label htmlFor='lastname'>First Name</Label>
              <Input type='name'
                placeholder='Enter your first name'
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
                id="firstName"
               
              />
            </Grid>
            <Grid item xs={12}>
              <Label htmlFor='lastname'>Last Name</Label>
              <Input type='name' placeholder='Enter your last name'
                required
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
            <Label htmlFor='username'>Email</Label>
              <Input type='email' placeholder='Enter valid email address' pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$" required onChange={(e) => setUsername(e.target.value)} name='username' value={username}/>
          
            <Label htmlFor='password'>Password</Label>           
            <Input type='password' placeholder='must contain' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters" required onChange={(e) => setPassword(e.target.value)} name='password' value={password}/>
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color=""
            className={classes.submit}
          >
            Join Birdr!
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={props.handleToggle}>
                Already a BIRDr member? Login 
                
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>

    </Container>
  );
}