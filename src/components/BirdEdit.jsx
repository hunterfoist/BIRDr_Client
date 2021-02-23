import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const BirdEdit = props => {

  const [ editSpecies, setEditSpecies ] = useState(props.birdToUpdate.description);
  const [ editLocation, setEditLocation ] = useState(props.birdToUpdate.definition);
  const [ editTime, setEditTime ] = useState(props.birdToUpdate.result);

  const [ editDate, setEditDate ] = useState(props.birdToUpdate.result);
  const [ editRarity, setEditRarity ] = useState(props.birdToUpdate.result);
  const [ editSecret, setEditSecret ] = useState(props.birdToUpdate.result);

  const triggerEditSpeciesInputChange = (event) => setEditSpecies(event.target.value);
  const triggerEditLocationInputChange = (event) => setEditLocation(event.target.value);
  const triggerEditTimeInputChange = (event) => setEditTime(event.target.value);
  const triggerEditDateInputChange = (event) => setEditDate(event.target.value);
  const triggerEditRarityInputChange = (event) => setEditRarity(event.target.value);
  const triggerEditSecretInputChange = (event) => setEditSecret(event.target.value);

  const birdUpdate = (event, bird) => {
    event.preventDefault();
    fetch(`http://localhost:3000/updatelog/${props.birdToUpdate.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
      body: JSON.stringify({log: { species: editSpecies, location: editLocation, time: editTime, date: editDate, rarity: editRarity, secret: editSecret }})
    })
    .then(response => {
      props.fetchBirds();
      props.updateOff();
    })
  };

  return(
    <Modal isOpen={true}>
      <ModalHeader>Update an entry!</ModalHeader>
      <ModalBody>
        <Form onSubmit={birdUpdate}>
          
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default BirdEdit;