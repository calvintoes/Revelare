import React, { useState } from 'react';
import {
  Button,
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const NavBar = (props) => {

  const [resetBtn, setResetBtn] = useState(false);


  const handleReset = () => {
    setResetBtn(true);
    console.log("Reset Btn Pressed")
  }

  const useStyles = makeStyles(theme => ({
    root: {
      height: '60px',
      backgroundColor: '#5C6C59'
    },
    navText: {
      float: 'left',
      margin: '10px 15px',
      color: 'white',
      fontFamily: 'Playfair Display',
      fontSize: '24px'
    },
    resetBtn: {
      float: 'right',
      margin: '10px 80px',
      color: 'white',
      padding: '5px 30px'
    }
  }));

  const classes = useStyles()
  return ( 
    <nav className={classes.root}>

      <Typography className={classes.navText}>
        This Land Is Our Land
      </Typography>

      <Button
        id="resetBtn"
        variant="outlined"  
        className={classes.resetBtn}
        onClick={handleReset}
      >
        Reset
      </Button>
      
    </nav>
   );
}
 
export default NavBar;