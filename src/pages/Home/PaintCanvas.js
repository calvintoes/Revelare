import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import './PaintCanvas.css'

const PaintCanvas = () => {
  return ( 
    <div className="canvas-wrapper">
      <canvas id="main-canvas" width="1200" height="750"></canvas>
    </div>
   );
}
 
export default PaintCanvas;