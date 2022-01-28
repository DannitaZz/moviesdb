import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import starwars from '../img/starwars.jpg';

export const Details = () => {
  return (
    <div>
      <Card sx={{with:'80vw', height: '92vh', display: 'flex', justifyContent: 'center'}}>
        <CardContent sx={{align: 'center'}}>
      <Typography component="div" variant="h4" textAlign='center'>
        Star Wars Episode VII
      </Typography>
      <CardMedia
          component="img"
          sx={{ width: '30vw', height: '30vh'}}
          image={starwars}
          alt="star wars poster"
        />
        <Typography component="div" variant="p" textAlign='center'>
        Año:
        Géneros:
        Lenguaje original: 
        Título original:
        Popularidad:
        <hr></hr>
        Productora: 
        País de orige:
        <hr></hr>
        EStado:


      </Typography>
      </CardContent>
      </Card>
    </div>
  )
}

export default Details;