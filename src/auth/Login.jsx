
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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



export default function Login(props) {
  
  const classes = useStyles();
  
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
           method: 'POST',
           body: JSON.stringify({user: {username: username, password: password}}),
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
          Login
        </Typography>
        <form className={classes.form} noValidate>
          
        <Label htmlFor='username'>Email</Label>
                    <Input type='email' placeholder='Enter valid email address' pattern={"^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"|| "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}" } onChange={(e) => setUsername(e.target.value)} name='username' value={username}/>
          <Label htmlFor='password'>Password</Label>           
          <Input type='password' placeholder='Min 5 characters with Capital and Lowercase' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}" onChange={(e) => setPassword(e.target.value)} name='password' value={password}/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Lost your bird?
              </Link>
            </Grid>
            <Grid item>
              <Button onClick={props.handleToggle}>
              No account? Register today
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
  }