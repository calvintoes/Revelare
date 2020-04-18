import React, { Component } from 'react';
import './PaintCanvas.css'

class PureCanvas extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="canvas-wrapper">
      <canvas
        id="main-canvas"
        width="840"
        height="630"
        ref={node =>
          node ? this.props.contextRef(node) : null
        }
      />
      </div>
    );
  }
}

export default PureCanvas;