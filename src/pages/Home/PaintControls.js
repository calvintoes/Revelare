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
      padding: '20px 50px'
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
      <Paper>
        <Container>
          <Button
            id="addBtn"
            variant="contained"
            onClick={() => handleBtns()}
            value={add}
            disableElevation={add}
          >
           Add 
          </Button>
          <Button
            id="subtractBtn"
            variant="contained"
            onClick={() => handleBtns()}
            value={subtract}
            disableElevation={subtract}
          >
           Subtract 
          </Button>
          <Typography id="continuous-slider" gutterBottom>
            Size:
          </Typography>
          <Slider
            value={size}
            onChange={handleBrush}
          />
        </Container>
      </Paper>
    </div>
   );
}
 
export default PaintControls;