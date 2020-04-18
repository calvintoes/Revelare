import React from 'react';
import {
  Button,
  Container,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const ExtraSettings = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '150px',
      textAlign: 'center'
    },
    card: {
      padding: '30px 5px',
    },
    shuffleBtn: {
      margin: '10px 0',
      color: 'white',
      backgroundColor: '#5D5D5F'
    },
    saveBtn: {
      margin: '10px 0',
      padding: '5px 30px',
      backgroundColor: '#5C6C59',
      color: 'white'
    },
    galleryBtn: {
      margin: '10px 0',
      color: '#5D5D5F',
    },
    
    
  }));

  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Paper className={classes.card}>
        <Container>
          <Button
            id="shuffleBtn"
            variant="contained"
            disableElevation
            className={classes.shuffleBtn}
          >
            Shuffle
          </Button>
          <Button
            id="saveBtn"
            variant="contained"
            disableElevation
            className={classes.saveBtn}
          >
            Save
          </Button>
          <Button
            id="galleryBtn"
            variant="outlined"
            disableElevation
            className={classes.galleryBtn}
          >
            View Gallery
          </Button>
        </Container>
      </Paper>
    </div>
   );
}
 
export default ExtraSettings;