import React, { useReducer } from 'react';
import PaintControls from './Home/PaintControls'
import NavBar from './Home/NavBar';
import ExtraSettings from './Home/ExtraSettings'
import PaintCanvas from './Home/PaintCanvas'
import './HomeContainer.css'

import {
  Grid,
} from '@material-ui/core'

export const AppContext = React.createContext();

const initialState = {
  addBtn: true,
  subtractBtn: false,
  brushSize: 10,
  resetBtn: false
};

function reducer(state, action) {
  switch(action.type){
    case 'ADD_BTN_PRESSED':
      console.log("ADD REDUER")
      return {
        ...initialState,
        addBtn: action.data
      }
    case 'SUBTRACT_BTN_PRESSED':
      console.log("SUBTRACT REDUCER")
      return {
        ...initialState,
        subtractBtn: action.data
      }
    case 'SLIDER_CHANGED':
      console.log("SLIDER");
      return {
        ...initialState,
        brushSize: action.data
      }
    case 'RESET_BTN_PRESSED':
      return{
        ...initialState,
        resetBtn: action.data
      }
    default:
      return initialState
  }
}

const HomeContainer = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state:', state);

  return ( 
    <>
    <AppContext.Provider value={{ state, dispatch }}>
    <NavBar />
    <Grid container className="home-wrapper">
        <Grid className="controls">
          <div className="paint-wrapper">
            <PaintControls />
          </div>
          <div className="settings-wrapper">
            <ExtraSettings />
          </div>
        </Grid>
        <Grid item>
          <PaintCanvas brushSettings={state} />
        </Grid>
    </Grid>
    </AppContext.Provider>
    </>
   );
}
 
export default HomeContainer;