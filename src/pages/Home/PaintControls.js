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
  // const [brushStroke, setbrushStroke] = useState('solid')

  const useStyles = makeStyles(theme => ({
    root: {
      padding: '35px 20px',
      maxWidth: '200px',
    },
    addBtn: {
      margin: '10px 0',
      maxWidth: '200px'
    },
    subBtn: {
      margin: '10px 0',
      maxWidth: '100px'
    },
    slider: {
      margin: '10px 0'
    }
    
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
    <>
      <Paper className={classes.root}>
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
    </>
   );
}
 
export default PaintControls;