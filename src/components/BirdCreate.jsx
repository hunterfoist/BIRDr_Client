import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const BirdCreate = props => {
  const [ species, setSpecies ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ rarity, setRarity ] = useState('');
  const [ image_url, setImage_url] = useState('');
  const [ secret, setSecret ] = useState('');

  // const triggerSpeciesInputChange = event => setSpecies(event.target.value);
  // const triggerLocationInputChange = event => setLocation(event.target.value);
  // const triggerDateInputChange = event => setDate(event.target.value);
  // const triggerTimeInputChange = event => setTime(event.target.value);
  // const triggerRarityInputChange = event => setRarity(event.target.value);
  // const triggerSecretInputChange = event => setSecret(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/log/createlog', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
      body: JSON.stringify({ log: { species: species, location: location, date: date, time: time, rarity: rarity, image_url: image_url, secret: secret } })
    })
    .then(response => response.json())
    .then(logData => {
      console.table(logData);
      setSpecies('');
      setLocation('');
      setDate('');
      setTime('');
      setRarity('');
      setImage_url('');
      setSecret('');
      props.fetchBirds();
    })
  }

  return(
    <>
    <h3>Create an Entry!</h3>
    <Container>
    <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Species"
                name="species"
                variant="outlined"
                required
                fullWidth
                
                onChange={(e) => setSpecies(e.target.value)}
                value={species}
                id="species"
                label="Species"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                name="location"
                autoComplete="location"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Date"
                onChange={(e) => setDate(e.target.value)}
                name='date'
                value={date}
                autoComplete="date"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
                label="Time"
                id="time"
                autoComplete="time"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="rarity"
                onChange={(e) => setRarity(e.target.value)}
                value={rarity}
                label="Rarity"
                id="rarity"
                autoComplete="rarity"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                onChange={(e) => setImage_url(e.target.value)}
                value={image_url}
                label="Image"
                id="image"
                autoComplete="image"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="secret"
                onChange={(e) => setSecret(e.target.value)}
                value={secret}
                label="Secret"
                id="secret"
                autoComplete="secret"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Create Log!
          </Button>
    </Container>
    </>
  );
};
export default BirdCreate;