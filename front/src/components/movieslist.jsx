import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import starwars from '../img/starwars.jpg';
import { CardActionArea } from '@mui/material';

function RenderRow(props) {
  const { index, style } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <Card sx={{ display: 'flex', width: '100vw', height:'20vh'}} key={index}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'row'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{marginLeft: '3%', marginTop: '1%'}}>
              Star Wars Episode VII
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{marginLeft: '4%'}}>
              Space opera 
              <br></br>
              J. J. Abrams - 2015
            </Typography>
          </CardContent>
        <CardMedia
          component="img"
          sx={{ width: '30vw', height: '20vh'}}
          image={starwars}
          alt="star wars poster"
        />
        </CardActionArea>
      </Card>
    </ListItem>
  );
}

export const MoviesList = () => ({ height, width }) => (
  <Box
    sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
  >
    <FixedSizeList
      className="List no-scrollbars"
      height={height}
      width={width}
      itemSize={200}
      itemCount={200}
    // overscanCount={5}
    >
      {RenderRow}
    </FixedSizeList>
  </Box>
)


















// import React from 'react';
// import { FixedSizeList as List } from 'react-window';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import { Grid } from '@mui/material';

// export function renderRow({ index, style }) {

//   return (
//     <ListItem style={style} key={index} component="div" /* disablePadding */>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }

// export const MoviesList = (n_items) => ({height, width}) => {
//   return (
//    /*  <Grid
//       container
//       justify="center"
//       justifyContent="center"
//       alignItems="center"
//       direction="column"
//       style={{ minHeight: "100vh" }}
//       spacing={5}
//     >
//     <Grid item>
//     <Box
//       sx={{ width: '100%', height: 400, maxWidth: 900, bgcolor: 'background.paper' }}
//     > */
//       <List
//         height={height}
//         width={width}
//         itemSize={100}
//         itemCount={n_items}
//         overscanCount={5}
//       >
//         {renderRow}
//       </List>
//    /*  </Box>
//     </Grid>
//     </Grid> */
//   );
// }


