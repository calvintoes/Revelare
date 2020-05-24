import React, { Component } from 'react';
import './PaintCanvas.css'
import { TOP_LAYER } from './ImageLocations'
import PureCanvas from './PureCanvas'
import { AppContext } from '../AppContext'


/**
 * History is an array of DataURL
 * [ [ {x,y},{x,y},{x,y} ...] ...]
 */
let history = [];
let historyStep = -1;

class PaintCanvas extends Component {
  static contextType = AppContext;
  constructor(props){
    super(props)
    this.canvas = null;
    this.ctx = null;
    this.drawing = false;
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
    console.log('loaded top layer')
    const img = new Image();
    img.onload = () => this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    img.src = TOP_LAYER
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
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.fillStyle = '#000';
      this.ctx.fill();
    }

    /**
     * Returns false if button is found
     * @param {} event 
     */
    const detectLeftButton= (event) => {
      if ('buttons' in event) {
          return event.buttons === 1;
      } else if ('which' in event) {
          return event.which === 1;
      } else {
          return event.button === 1;
      }
    }

    /**
     * EVENT LISTENERS
     */

    //document.getElementById('undoBtn').addEventListener('click', this.handleUndo);
    document.getElementById('resetBtn').addEventListener('click', this.handleReset);

    /**
     * MOBILE EVENTS
     */

    this.canvas.addEventListener('touchmove', (e) => {
      let myContext = this.context.state;
      e.preventDefault();
      // console.log("Touches detected");
      if ( myContext.addBtn ) {
        let touches = e.targetTouches[0];
        if (touches){
          let brushPos = getBrushPosition(touches.pageX, touches.pageY);
          drawDot(brushPos.x, brushPos.y);
        }
      }
    }, {passive: false});

    // this.canvas.addEventListener('touchend', () => {
    //   let myContext = this.context.state;
  
    //   if ( myContext.addBtn ) {
    //     historyStep += 1;
    //     history = [...history, this.canvas.toDataURL()]
    //     console.log(history)
    //   }
    // }, {passive: false})

    /**
     * DESKTOP EVENTS
     */
    this.canvas.addEventListener('mousemove', (e) => {
      let myContext = this.context.state;
      if ( myContext.addBtn ){
        let brushPosition = getBrushPosition(e.clientX, e.clientY);
        let leftButton = detectLeftButton(e);
        if ( leftButton ){
          drawDot(brushPosition.x, brushPosition.y);
        }
      }
    }, false);

    this.canvas.addEventListener('mouseup', (e) => {
      let myContext = this.context.state;
      console.log('mouseup')
      if ( myContext.addBtn ) {
        historyStep += 1;
        if (historyStep < history.length) history.length = historyStep
        this.ctx.globalCompositeOperation = "source-over"
        history = [...history, this.canvas.toDataURL()]
        console.log(history)
      }
    })
  }

  // handleUndo = () => {
  //   if ( historyStep === 0 ) return;

  //   let prevImageState = new Image();
  //   prevImageState.src = history[history.length - 1]
  //   this.ctx.globalCompositeOperation = 'source-over'
  //   prevImageState.onload = () => {
  //     console.log('drawing')
  //     this.ctx.drawImage(prevImageState, 0, 0, this.canvas.width, this.canvas.height);
  //   }
  //   console.log("load prev state", history)
    
  // }

  handleReset = () => {
   console.log('inside reset')
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
   this.ctx.globalCompositeOperation = 'source-over'
   this.initTopLayer();
  }

  

  render() { 
    // console.log('Paint state',this.state)
    return ( 
      <PureCanvas contextRef={this.saveContext}/>
     );
  }
}
 
export default PaintCanvas;