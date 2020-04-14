import React, { Component } from 'react';
import './PaintCanvas.css'
import topImgSrc from '../../assets/suburbia.jpg'

class TestCanvas extends Component {
 
  componentDidMount(){
    this.initDraw();
  }

  componentDidUpdate() {
    this.initDraw();
  }

  shouldComponentUpdate(){
    return false
  }
  
  initDraw = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d")
    const img = new Image();
    console.log(canvas)

    img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
    img.src = topImgSrc;

    // Drawing methods
    const getBrushPosition = (xCoord, yCood) => {
      let canvasRect = canvas.getBoundingClientRect();
      return {
        x: Math.floor((xCoord-canvasRect.left)/(canvasRect.right - canvasRect.left) * canvas.width),
        y: Math.floor((yCood - canvasRect.top)/(canvasRect.bottom - canvasRect.top) * canvas.height)
      }
    }

    const drawDot = (mouseX, mouseY) => {
      console.log("draw dot")
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 15, 0, 2*Math.PI, true);
      ctx.fillStyle = '#000';
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fill();
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

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      // console.log("Touches detected");
      let touches = e.targetTouches[0];
      if (touches){
        let brushPos = getBrushPosition(touches.pageX, touches.pageY);
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);
  
    canvas.addEventListener('mousemove', (e) => {
      console.log("mouse move");
      let brushPosition = getBrushPosition(e.clientX, e.clientY);
      let leftButton = detectLeftButton(e);
      if (leftButton === 0){
        drawDot(brushPosition.x, brushPosition.y);
      }
    }, false);
  }

  render() { 
    return ( 
      <div className="canvas-wrapper">
      <canvas 
        id="main-canvas" 
        ref="canvas"
        width={840} 
        height={630}
      />
    </div>
     );
  }
}
 
export default TestCanvas;