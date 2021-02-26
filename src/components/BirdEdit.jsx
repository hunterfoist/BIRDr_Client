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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const BirdEdit = props => {

  const [ editSpecies, setEditSpecies ] = useState(props.birdToUpdate.species);
  const [ editLocation, setEditLocation ] = useState(props.birdToUpdate.location);
  const [ editTime, setEditTime ] = useState(props.birdToUpdate.time);
  const [ editDate, setEditDate ] = useState(props.birdToUpdate.date);
  const [ editRarity, setEditRarity ] = useState(props.birdToUpdate.rarity);
  const [ editSecret, setEditSecret ] = useState(props.birdToUpdate.secret);

  const handleSubmit = (event, bird) => {
    event.preventDefault();
    fetch(`http://localhost:3000/log/updatelog/${props.birdToUpdate.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
      body: JSON.stringify({log: { species: editSpecies, location: editLocation, time: editTime, date: editDate, rarity: editRarity, secret: editSecret }})
    })
    .then(response => {
      props.fetchBirds();
      props.handleClose();
    })
  };
  


  return(
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I want to update the birdy.
          </DialogContentText>
    <Container>
    <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Species"
                name="species"
                variant="outlined"
                required
                fullWidth
                
                onChange={(e) => setEditSpecies(e.target.value)}
                value={editSpecies}
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
                onChange={(e) => setEditLocation(e.target.value)}
                value={editLocation}
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
                onChange={(e) => setEditDate(e.target.value)}
                name='date'
                value={editDate}
                autoComplete="date"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="time"
                onChange={(e) => setEditTime(e.target.value)}
                value={editTime}
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
                onChange={(e) => setEditRarity(e.target.value)}
                value={editRarity}
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
                name="secret"
                onChange={(e) => setEditSecret(e.target.value)}
                value={editSecret}
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
            color="primary"          >
            Create Log!
          </Button>
    </Container>
    </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Update
          </Button>
                 </DialogActions>
      </Dialog>
  );};

export default BirdEdit;