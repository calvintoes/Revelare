import React, { Component } from 'react';
import './PaintCanvas.css'
import topImgSrc from '../../assets/suburbia.jpg'
import PureCanvas from './PureCanvas'
import { AppContext } from '../AppContext'

class PaintCanvas extends Component {
  static contextType = AppContext;
  constructor(props){
    super(props)
    this.canvas = null;
    this.ctx = null;
  }  
  
  componentDidMount(){
    this.initDraw();
    this.initTopLayer();
  }

  componentDidUpdate(){
    this.initDraw();
  }

  // Callback function to set canvas Context
  saveContext = (canvas) => {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  // Overlays top image on canvas
  initTopLayer = () => {
    const img = new Image();
    img.onload = () => this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    img.src = topImgSrc;
  }
  
  initDraw = () => {
    const myContext = this.context.state;
    console.log(myContext)

    // Handle Brush size
    let brushRadius = (myContext.brushSize/100) * 5;
    if (brushRadius < 15) brushRadius = 15;

    // Drawing methods
    const getBrushPosition = (xCoord, yCood) => {
      let canvasRect = this.canvas.getBoundingClientRect();
      return {
        x: Math.floor((xCoord-canvasRect.left)/(canvasRect.right - canvasRect.left) * this.canvas.width),
        y: Math.floor((yCood - canvasRect.top)/(canvasRect.bottom - canvasRect.top) * this.canvas.height)
      }
    }

    const drawDot = (mouseX, mouseY) => {
      console.log("draw dot", myContext.brushSize)
      this.ctx.beginPath();
      this.ctx.arc(mouseX, mouseY, myContext.brushSize, 0, 2*Math.PI, true);

      const img = (
        <img 
          src={topImgSrc} 
          alt="top layer"
          style={{
            backgroundSize: 'cover'
        }}/>
      )
      
      if (myContext.addBtn) {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = '#000';
      } else {
        this.ctx.globalCompositeOperation = 'source-over'
        // this.ctx.fillStyle = this.ctx.createPattern(img, 'no-repeat')
      }
      
      this.ctx.fill();
     
    }

    const detectLeftButton= (event) => {
      if ('buttons' in event) {
          return event.buttons === 0;
      } else if ('which' in event) {
          return event.which === 0;
      } else {
          return event.button === 0;
      }
    }

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      // console.log("Touches detected");
      let touches = e.targetTouches[0];
      if (touches){
        let brushPos = getBrushPosition(touches.pageX, touches.pageY);
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);
  
    this.canvas.addEventListener('mousemove', (e) => {
      console.log("mouse move");
      let brushPosition = getBrushPosition(e.clientX, e.clientY);
      let leftButton = detectLeftButton(e);
      if (leftButton === 0){
        drawDot(brushPosition.x, brushPosition.y);
      }
    }, false);
  }

  render() { 
    // console.log('Paint state',this.state)
    return ( 
      <PureCanvas contextRef={this.saveContext}/>
     );
  }
}
 
export default PaintCanvas;