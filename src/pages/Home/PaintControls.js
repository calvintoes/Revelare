import React, { useState } from 'react';
import {
  Button,
  Container,
  Slider,
  Paper,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const PaintControls = (props) => {

  const [add, setAddBtn] = useState(true)
  const [subtract, setSubtractBtn] = useState(false) 
  const [size, setBrushSize] = useState(5)

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '200px',
      textAlign: 'center'
    },
    card: {
      padding: '35px 10px',
    },
    addBtn: {
      margin: '10px 0',
      maxWidth: '200px',
      padding: '5px 30px',
      backgroundColor: add ? '#5D5D5F' : 'null',
      color: add ? 'white' : 'null'
    },
    subBtn: {
      margin: '10px 0',
      maxWidth: '100px'
    },
    slider: {
      margin: '10px 0'
    },
    title: {
      margin: '10px 0',
      color: '#5C6C59',
      textAlign: 'center',
      borderBottom: '2px solid'
    },
    
  }));
  
  const handleBtns = (e) => {
    if (!add) {
      setAddBtn(true);
      setSubtractBtn(false);
    } else {
      setAddBtn(false);
      setSubtractBtn(true);
    }

    if (!subtract) {
      setAddBtn(false);
      setSubtractBtn(true);
    } else {
      setAddBtn(true);
      setSubtractBtn(false);
    }

    console.log("add: ", add);
    console.log("subtract: ", subtract)
  }

  const handleBrush = (e, newValue) => {
    setBrushSize(newValue);
  }
        
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Typography
        variant="h6"
        className={classes.title}
        >
          Paint Controls
      </Typography>

      <Paper className={classes.card}>
        <Container>
          <Button
            id="addBtn"
            variant="contained"
            onClick={() => handleBtns()}
            value={add}
            disableElevation={add}
            className={classes.addBtn}
          >
           Add 
          </Button>
          <Button
            id="subtractBtn"
            variant="contained"
            onClick={() => handleBtns()}
            value={subtract}
            disableElevation={subtract}
            className={classes.subBtn}
          >
           Subtract 
          </Button>
          <Typography id="continuous-slider" gutterBottom>
            Size:
          </Typography>
          <Slider
            value={size}
            onChange={handleBrush}
            className={classes.slider}
          />
        </Container>
      </Paper>
    </div>
   );
}
 
export default PaintControls;