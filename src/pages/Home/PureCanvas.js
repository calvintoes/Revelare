import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import './PaintCanvas.css'
import { BOTTOM_LAYER } from './ImageLocations';

const useStyles = () => ({
  root: {
    backgroundImage: `url(${BOTTOM_LAYER})`
  }
});

class PureCanvas extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes } = this.props
    return (
      <div className="canvas-wrapper">
      <canvas
        id="main-canvas"
        className={classes.root}
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

export default withStyles(useStyles)(PureCanvas);