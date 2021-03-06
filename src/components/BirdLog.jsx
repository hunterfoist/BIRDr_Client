import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import { sizing } from '@material-ui/system';
=======
import BirdChild from './BirdChild';
>>>>>>> a0dec377e3560dafff4d26e267a231be21a1dbae

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

  
  
  
  // const birdMapper = () => {
  //   return props.birds.map((bird, index) => {
      
      
  //     return(
  //     <div>
    
        
  //       </div>
  //     );
  //   });
  // };
  
  return(
    <>
      <h3>Bird History</h3>
      
<<<<<<< HEAD
    
      {/* <Table alignItem="baseline">
        <tbody> */}
        <Card className={classes.root} style={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.bird.image_id}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="h2">
          {props.bird.species}
          </Typography>
          <Typography align='center' variant="body2" color="textSecondary" component="p">
          {props.bird.location}
          </Typography>
          <Typography align='center' variant="body2" color="textSecondary" component="p">
          {props.bird.date} || {props.bird.time}
          </Typography>
          <Typography align='center' variant="body2" color="textSecondary" component="p">Rarity Rating: {props.bird.rarity}
          </Typography>
          <Typography align='center' variant="body2" color="textSecondary" component="p">
          {props.bird.secret}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
      <Button  color="warning" onClick={() => {props.editUpdateBird(props.bird); handleClickOpen(); props.updateOn()}} >Update</Button>
      <Button  color="danger" onClick={() => deleteBird(props.bird)}>Delete</Button>
      </CardActions>
    </Card>
        {/* </tbody>
      </Table> */}
=======
      <Table alignItem="baseline">
        <tbody>
          {displayCards()}
        </tbody>
      </Table>
>>>>>>> a0dec377e3560dafff4d26e267a231be21a1dbae
    </>
  );
};
export default BirdLog;