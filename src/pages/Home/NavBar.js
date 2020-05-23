import React from 'react';
import {
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const NavBar = (props) => {

  const useStyles = makeStyles(theme => ({
    root: {
      height: '60px',
      backgroundColor: '#5C6C59'
    },
    navWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    navText: {
      margin: '10px 15px',
      color: 'white',
      fontFamily: 'Playfair Display',
      fontSize: '24px'
    },
    resetBtn: {
      margin: '0 80px',
      color: 'white',
      padding: '5px 30px'
    }
  }));

  const classes = useStyles()
  return ( 
    <nav className={classes.root}>
      <div className={classes.navWrapper}>
        <Typography className={classes.navText}>
          This Land Is Our Land
        </Typography>

        <Button
          id="resetBtn"
          variant="outlined"  
          className={classes.resetBtn}
        >
          Reset
        </Button>
      </div>
    </nav>
   );
}
 
export default NavBar;