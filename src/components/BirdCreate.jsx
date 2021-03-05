import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const BirdCreate = props => {
  const [ species, setSpecies ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ rarity, setRarity ] = useState('');
  const [ image_url, setImage_url] = useState('');
  const [ secret, setSecret ] = useState('false');



  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'cloudinary-birdr')
    console.log(data)
    const res = await fetch('https://api.cloudinary.com/v1_1/birdr/image/upload', {
        method: 'POST',
        body: data
    })
    const file = await res.json()

    const image_url=file.secure_url
    console.log(image_url)
    setImage_url(file.secure_url)
    
}

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
    

    
  
    <Container alignItem="baseline">
    <br/>
    <br/>
    <br/>
    <h3>Create an Entry!</h3>
    <br/>
    <Grid container spacing={2}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
                type="date"
                InputLabelProps={{
                shrink: true,
                }}
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
                type="time"
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
                onChange={(e) => setTime(e.target.value)}
                value={time}
                label="Time"
                id="time"
                autoComplete="time"
              />
            </Grid>
            <Grid item xs={12}>Rarity
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                required
                fullWidth
                name="rarity"
                onChange={(e) => setRarity(e.target.value)}
                value={rarity}
                label="Rarity"
                id="rarity"
                autoComplete="Rarity"
                >
                  <MenuItem value={1}>Common</MenuItem>
                  <MenuItem value={2}>Uncommon</MenuItem>
                  <MenuItem value={3}>Rare</MenuItem>
                  <MenuItem value={4}>Very Rare</MenuItem>
                  <MenuItem value={5}>Legendary</MenuItem>
                </Select>
             
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="upload-photo"
                type="file"
                onChange={uploadImage}
                //onChange={(e) => setImage_url(e.target.value)}
                
                // label="Image"
                id="image"
                autoComplete="image"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                variant="outlined"
                required
                fullWidth
                name="secret"
                onChange={(e) => setSecret(e.target.value)}
                value={secret}
                label="Would you like this entry to be private?"
                id="secret"
                autoComplete="secret"
                control={<Checkbox value="Yes" color="primary" />}
          />  
            </Grid>
            
          </Grid>
          <Button style={{backgroundColor: 'lightBlue', color: 'darkblue'}}
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Create Log!
          </Button >
    </Container>
    </>
  );
};
export default BirdCreate;