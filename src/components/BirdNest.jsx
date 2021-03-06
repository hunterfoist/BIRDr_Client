import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BirdCreate from './BirdCreate';
import BirdLog from './BirdLog';
import BirdEdit from './BirdEdit';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import APIURL from '../helpers/environment';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a1cae2',
    },
    secondary: {
      main: '#eae3cb',
    },
  },
});

const BirdNest = props => {

  const [ birds, setBirds ] = useState([]);
  const [ updateActive, setUpdateActive ] = useState(false);
  const [ birdToUpdate, setBirdToUpdate ] = useState({});

  const fetchBirds = () => {
    fetch(`${APIURL}/log/getlogs`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then(response => response.json())
    .then(logData => setBirds(logData));
  };

  const editUpdateBird = bird => {
    setBirdToUpdate(bird);
    console.log(bird);
  };

  const updateOn = () => setUpdateActive(true);

  const updateOff = () => setUpdateActive(false);

  useEffect(() => fetchBirds(), [])

  function displayCards() {
    return birds.length > 0 ? birds.map((bird) => <BirdLog bird={bird} birds={birds} editUpdateBird={editUpdateBird} updateOn={updateOn} fetchBirds={fetchBirds} token={props.token} />) : null;
}


  return(
    <Container flexDirection="row" alignItems="flex-start" mt={2}>
     <Grid container xs={12}>
        <Grid container item xs="3">
          <BirdCreate fetchBirds={fetchBirds} token={props.token} />
        </Grid>
        <Grid container item xs="9" alignItems="flex-start">
          {displayCards()}
        {/* <BirdLog birds={birds} editUpdateBird={editUpdateBird} updateOn={updateOn} fetchBirds={fetchBirds} token={props.token} />  */}
          {updateActive ? <BirdEdit birdToUpdate={birdToUpdate} updateOn={updateOn} updateOff={updateOff} token={props.token} fetchBirds={fetchBirds}/> : <></>}
        </Grid>
        </Grid>

    </Container>
  );
};

export default BirdNest;

