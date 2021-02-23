import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BirdCreate = props => {
  const [ species, setSpecies ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ rarity, setRarity ] = useState('');
  const [ secret, setSecret ] = useState('');

  const triggerSpeciesInputChange = event => setSpecies(event.target.value);
  const triggerLocationInputChange = event => setLocation(event.target.value);
  const triggerDateInputChange = event => setDate(event.target.value);
  const triggerTimeInputChange = event => setTime(event.target.value);
  const triggerRarityInputChange = event => setRarity(event.target.value);
  const triggerSecretInputChange = event => setSecret(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/createlog', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
      body: JSON.stringify({ log: { species, location, date, time, rarity, secret } })
    })
    .then(response => response.json())
    .then(logData => {
      console.table(logData);
      setSpecies('');
      setLocation('');
      setDate('');
      setTime('');
      setRarity('');
      setSecret('');
      props.fetchBirds();
    })
  }

  return(
    <>
    <h3>Create an Entry!</h3>
    <Form onSubmit={handleSubmit}>
      
    </Form>
    </>
  );
};
export default BirdCreate;