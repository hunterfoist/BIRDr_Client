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

  
  const useStyles = makeStyles({
    root: {
      maxWidth: 340,
      margin: 20,
      
    },
    media: {
      height: 240,
    },
  });
  const classes = useStyles();
 
  
  return(
    <>
      
    
      {/* <Table alignItem="baseline">
        <tbody> */}
        <Card className={classes.root}>
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
          <Typography align='center' variant="body2" color="textSecondary" component="p">
          {props.bird.rarity}
          </Typography>
          <Typography align='center' variant="body2" color="textSecondary" component="p">
          {props.bird.secret}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button  color="warning" onClick={() => {props.editUpdateBird(props.bird); handleClickOpen(); props.updateOn()}} >Update</Button>
      <Button color="danger" onClick={() => deleteBird(props.bird)}>Delete</Button>
      </CardActions>
    </Card>
        {/* </tbody>
      </Table> */}
    </>
  );
};
export default BirdLog;