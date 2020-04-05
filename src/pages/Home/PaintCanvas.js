import React, { useRef, useEffect} from 'react';
import './PaintCanvas.css'
import topImgSrc from '../../assets/suburbia.jpg'

const PaintCanvas = React.memo( ({brushSettings}) => {
  console.log(brushSettings)
  // Canvas Variables
  const {addBtn, subtractBtn, brushSize} = brushSettings;
  let brushRadius = (brushSize/100) * 5;
   
  const mCanvas = useRef(null);
  let img = new Image();

  if (brushRadius < 15) brushRadius = 15;
  useEffect(() => {
    //load overlay image
    let ctx = mCanvas.current.getContext('2d');
    img.onload = () => ctx.drawImage(img, 0, 0, mCanvas.current.width, mCanvas.current.height);
  
    img.src = topImgSrc;

    // Drawing methods
    const getBrushPosition = (xCoord, yCood) => {
      let canvasRect = mCanvas.current.getBoundingClientRect();
      return {
        x: Math.floor((xCoord-canvasRect.left)/(canvasRect.right - canvasRect.left) * mCanvas.current.width),
        y: Math.floor((yCood - canvasRect.top)/(canvasRect.bottom - canvasRect.top) * mCanvas.current.height)
      }
    }

    const drawDot = (mouseX, mouseY) => {
      console.log("draw dot")
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
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

    mCanvas.current.addEventListener('touchmove', (e) => {
      e.preventDefault();
      // console.log("Touches detected");
      let touches = e.targetTouches[0];
      if (touches){
        let brushPos = getBrushPosition(touches.pageX, touches.pageY);
        drawDot(brushPos.x, brushPos.y);
      }
    }, false);

    mCanvas.current.addEventListener('mousemove', (e) => {
      console.log("mouse move");
      let brushPosition = getBrushPosition(e.clientX, e.clientY);
      let leftButton = detectLeftButton(e);
      if (leftButton === 0){
        drawDot(brushPosition.x, brushPosition.y);
      }
    }, false);
  })
  


  return ( 
    <div className="canvas-wrapper">
      <canvas 
        id="main-canvas" 
        ref={mCanvas} 
        width={840} 
        height={630}
      />
    </div>
   );
})
 
export default PaintCanvas;