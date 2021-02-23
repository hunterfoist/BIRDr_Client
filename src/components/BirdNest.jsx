import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BirdCreate from './BirdCreate';
import BirdLog from './BirdLog';
import BirdEdit from './BirdEdit';

const BirdNest = props => {

  const [ birds, setBirds ] = useState([]);
  const [ updateActive, setUpdateActive ] = useState(false);
  const [ birdToUpdate, setBirdToUpdate ] = useState({});

  const fetchBirds = () => {
    fetch('http://localhost:3000/', {
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

  return(
    <Container>
      <Row>
        <Col md="3">
          <BirdCreate fetchBirds={fetchBirds} token={props.token} />
        </Col>
        <Col md="9">
          <BirdLog birds={birds} editUpdateBird={editUpdateBird} updateOn={updateOn} fetchBirds={fetchBirds} token={props.token} />
        </Col>
        {updateActive ? <BirdEdit birdToUpdate={birdToUpdate} updateOff={updateOff} token={props.token} fetchBirds={fetchBirds} /> : <></>}
      </Row>
    </Container>
  );
};
export default BirdNest;