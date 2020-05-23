import React, { useState, useContext } from 'react';
import {
  Button,
  Slider,
  Paper,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AppContext } from '../AppContext'

const PaintControls = (props) => {

  const [add, setAddBtn] = useState(true);
  const [undo, setUndoBtn] = useState(false); 
  const {state, dispatch} = useContext(AppContext);

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '150px',
      textAlign: 'center'
    },
    card: {
      padding: '30px 10px',
    },
    addBtn: {
      margin: '10px 0',
      maxWidth: '200px',
      padding: '8px 35px',
      backgroundColor: add ? '#5D5D5F' : 'null',
      color: add ? 'white' : 'null'
    },
    undoBtn: {
      margin: '12px 0',
      maxWidth: '100px',
      padding: '6px 30px',
      backgroundColor: undo ? '#5D5D5F' : 'null',
    },
    slider: {
      margin: '10px 0',
      paddingTop: 0,
      width: '100px'
    },
    title: {
      margin: '10px 0',
      color: '#5C6C59',
      textAlign: 'center',
      borderBottom: '2px solid'
    },
    
  }));
  
  const handleAddBtn = (e) => {
    setAddBtn(true);
    setUndoBtn(false);
    dispatch({ type: 'ADD_BTN_PRESSED', data: true });
    dispatch({ type: 'UNDO_BTN_FLIP', data: false });
  }

  const handleUndoBtn = (e) => {
    setAddBtn(false);
    setUndoBtn(true);
    dispatch({ type: 'UNDO_BTN_PRESSED', data: true })
    dispatch({ type: 'ADD_BTN_FLIP', data: false });
  }

  const handleBrush = (e, newValue) => {
    dispatch({type: 'SLIDER_CHANGED', data: newValue})
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
          <Button
            id="addBtn"
            variant="contained"
            onClick={handleAddBtn}
            disableElevation={add}
            className={classes.addBtn}
          >
           Add 
          </Button>
          {/* <Button
            id="undoBtn"
            variant="contained"
            onClick={handleUndoBtn}
            disableElevation={undo}
            className={classes.undoBtn}
            
          >
           Undo 
          </Button> */}
          <Typography id="continuous-slider" >
            Size:
          </Typography>
          <Slider
            onChange={handleBrush}
            className={classes.slider}
            step={10}
          />
      </Paper>
    </div>
   );
}
 
export default PaintControls;