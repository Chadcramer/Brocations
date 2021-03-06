import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardMedia, makeStyles, withTheme } from '@material-ui/core';

const useStyles = makeStyles ({
  image: {
    height: '40vh',
    width: '100vw',
    marginLeft: '-24px',
    position: 'relative',
    
  },
  imageText: {
    position: 'absolute',
    top: '15%',
    left: '15%',
    right: '15%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadow: '#2b2b2b 0px 0px 20px'
  },
  imageDescription: {
    position: 'absolute',
    top: '29%',
    left: '15%',
    right: '15%',
    textAlign: 'center',
    color: 'white',
    fontSize: '28px',
    fontStyle: 'italic',
    lineHeight: '32px',
    textShadow: '#2b2b2b 0px 0px 20px'
  }
})

const Headline = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <CardMedia className={classes.image} image='https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>

      <Typography className={classes.imageText} variant='h1'>
        Brocations
      </Typography>

      <Typography className={classes.imageDescription} variant='body1'>
      Planning epic experiences for the modern gentleman.  A full service bachelor party planning service.
      </Typography>

      </Container>
    </React.Fragment>
  );
}

export default Headline;