import React, { useState } from 'react';
import {
  Button,
  Container,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const ExtraSettings = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '200px',
      // textAlign: 'center's
    },
    card: {
      padding: '35px 10px',
    },
    shuffleBtn: {
      margin: '10px 0'
    },
    saveBtn: {
      margin: '10px 0'
    },
    galleryBtn: {
      margin: '10px 0'
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
            variant="contained"
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