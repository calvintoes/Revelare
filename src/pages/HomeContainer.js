import React, { useReducer } from 'react';
import PaintControls from './Home/PaintControls'
import NavBar from './Home/NavBar';
// import ExtraSettings from './Home/ExtraSettings'
import PaintCanvas from './Home/PaintCanvas'
import './HomeContainer.css'
import {
  Grid,
} from '@material-ui/core'
import { AppContext } from './AppContext'

const initialState = {
  addBtn: true,
  undoBtn: false,
  brushSize: 15,
};

function reducer(state, action) {
  switch(action.type){
    case 'ADD_BTN_PRESSED':
    case 'ADD_BTN_FLIP':
      console.log("ADD REDUCER")
      return {
        ...state,
        addBtn: action.data
      }
    // case 'UNDO_BTN_PRESSED':
    // case 'UNDO_BTN_FLIP':
    //   console.log("UNDO REDUCER")
    //   return {
    //     ...state,
    //     undoBtn: action.data
    //   }
    case 'SLIDER_CHANGED':
      console.log("SLIDER");
      return {
        ...state,
        brushSize: action.data
      }
    default:
      return initialState
  }
}

const HomeContainer = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('Container state:', state);

  return ( 
    <>
    <AppContext.Provider value={{ state, dispatch }}>
    <NavBar />
    <Grid container className="home-wrapper">
        <Grid className="controls">
          <div className="paint-wrapper">
            <PaintControls />
          </div>
          {/* <div className="settings-wrapper">
            <ExtraSettings />
          </div> */}
        </Grid>
        <Grid item>
          <PaintCanvas />
        </Grid>
    </Grid>
    </AppContext.Provider>
    </>
   );
}
 
export default HomeContainer;