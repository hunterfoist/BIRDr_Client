// import React, { useState } from 'react';

// const BirdEdit = props => {

//   const [ editSpecies, setEditSpecies ] = useState(props.birdToUpdate.description);
//   const [ editLocation, setEditLocation ] = useState(props.birdToUpdate.definition);
//   const [ editTime, setEditTime ] = useState(props.birdToUpdate.result);

//   const [ editDate, setEditDate ] = useState(props.birdToUpdate.result);
//   const [ editRarity, setEditRarity ] = useState(props.birdToUpdate.result);
//   const [ editSecret, setEditSecret ] = useState(props.birdToUpdate.result);

//   const birdUpdate = (event, bird) => {
//     event.preventDefault();
//     fetch(`http://localhost:3000/log/updatelog/${props.birdToUpdate.id}`, {
//       method: 'PUT',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': props.token
//       }),
//       body: JSON.stringify({log: { species: editSpecies, location: editLocation, time: editTime, date: editDate, rarity: editRarity, secret: editSecret }})
//     })
//     .then(response => {
//       props.fetchBirds();
//       props.updateOff();
//     })
//   };

//   return(
//     <Container>
//     <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="Species"
//                 name="species"
//                 variant="outlined"
//                 required
//                 fullWidth
                
//                 onChange={(e) => setSpecies(e.target.value)}
//                 value={species}
//                 id="species"
//                 label="Species"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="location"
//                 label="Location"
//                 onChange={(e) => setLocation(e.target.value)}
//                 value={location}
//                 name="location"
//                 autoComplete="location"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="date"
//                 label="Date"
//                 onChange={(e) => setDate(e.target.value)}
//                 name='date'
//                 value={date}
//                 autoComplete="date"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="time"
//                 onChange={(e) => setTime(e.target.value)}
//                 value={time}
//                 label="Time"
//                 id="time"
//                 autoComplete="time"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="rarity"
//                 onChange={(e) => setRarity(e.target.value)}
//                 value={rarity}
//                 label="Rarity"
//                 id="rarity"
//                 autoComplete="rarity"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="secret"
//                 onChange={(e) => setSecret(e.target.value)}
//                 value={secret}
//                 label="Secret"
//                 id="secret"
//                 autoComplete="secret"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             onClick={handleSubmit}
//             fullWidth
//             variant="contained"
//             color="primary"
//           >
//             Create Log!
//           </Button>
//     </Container>
//   );
// };

// export default BirdEdit;