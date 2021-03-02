import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BirdEdit from './BirdEdit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


  const BirdLog = props => {

  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteBird = bird => {


    fetch(`http://localhost:3000/log/deletelog/${bird.id}`, {


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
        <div>
        <TableContainer component={Paper}>
          <Table>
        <TableBody>
        <TableRow key={index}>
              <TableCell component="th" scope="row">
                {bird.species}</TableCell>
          <TableCell>{bird.location}</TableCell>
          <TableCell>{bird.time}</TableCell>
          <TableCell>{bird.date}</TableCell>
          <TableCell>{bird.rarity}</TableCell>
          <TableCell>{bird.secret}</TableCell>
          <TableCell>
            <Button color="warning" onClick={() => {props.editUpdateBird(bird); handleClickOpen(); props.updateOn()}} >Update</Button>
            <Button color="danger" onClick={() => deleteBird(bird)}>Delete</Button>
          </TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        </div>
      );
    });
  };
  
  return(
    <>
      <h3>Bird History</h3>
      
      <Table alignItem="baseline">
        <tbody>
          {birdMapper()}
        </tbody>
      </Table>
    </>
  );
};
export default BirdLog;