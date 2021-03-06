import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '../assets/birdr.png';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import birdr from "../assets/birdrrbracket.svg";




const Sitebar = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    const useStyles = makeStyles((theme) => ({
        palette: {
          primary: {
            main: '#aecbea',
          },
          secondary: {
            main: '#c2b092',
          },
        },    
        root: {
          flexGrow: 1, 
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        logo: {
          maxWidth: 40,
          marginRight: '20px'
        }
      }));

    const classes = useStyles();
    return (
        
        
        <AppBar position="static" style={{backgroundColor: '#aecbea'}} >
        <Toolbar style={{color: '#000000'}}>
        <img src={birdr} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            BIRDr
          </Typography>
          <Button variant="h6" color="inherit" onClick={props.clickLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
         
         
                    
    )
}

export default Sitebar;