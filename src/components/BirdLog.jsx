import React from 'react';
import { Table, Button } from 'reactstrap';

const BirdTable = props => {
  
  const deleteBird = bird => {
    fetch(`http://localhost:3000/deletelog/${bird.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then(() => props.fetchBirds())
  };

  const birdMapper = () => {
    return props.birds.map((bird, index) => {
      return(
        <tr key={index}>
          <th scope="row">{bird.id}</th>
          <td>{bird.species}</td>
          <td>{bird.location}</td>
          <td>{bird.time}</td>
          <td>{bird.date}</td>
          <td>{bird.rarity}</td>
          <td>{bird.secret}</td>
          <td>
            <Button color="warning" onClick={() => {props.editUpdateBird(bird); props.updateOn()}} >Update</Button>
            <Button color="danger" onClick={() => deleteBird(bird)}>Delete</Button>
          </td>
        </tr>
      );
    });
  };
  
  return(
    <>
      <h3>Bird History</h3>
      
      <Table>
        <tbody>
          {birdMapper()}
        </tbody>
      </Table>
    </>
  );
};
export default BirdTable;