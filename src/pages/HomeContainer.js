import React from 'react';
import PaintControls from './Home/PaintControls'
import NavBar from './Home/NavBar';
import ExtraSettings from './Home/ExtraSettings'
import PaintCanvas from './Home/PaintCanvas'
import './HomeContainer.css'

import {
  Grid,
} from '@material-ui/core'

const HomeContainer = (props) => {
  return ( 
    <>
    <NavBar />
      <Grid container className="main-wrapper">
        <Grid className="controls">
          <div className="paint-wrapper">
            <PaintControls />
          </div>
          <div className="settings-wrapper">
            <ExtraSettings />
          </div>
        </Grid>
        <Grid item>
          <PaintCanvas />
        </Grid>
      </Grid>
    </>
   );
}
 
export default HomeContainer;