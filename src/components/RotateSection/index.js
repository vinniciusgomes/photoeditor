import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import "./rotationSection.css";

const styles = {
  root: {
    width: "200px",
  },
  slider: {
    margin: "9px auto",
  },
};

class RotateSection extends Component {
  render() {
    const { classes } = this.props;

    if (this.props.showRotateSection) {
      return (
        <div className={classes.root}>
          <div className="flip-button">
            <button
              style={{
                width: 175,
                borderRadius: "2px",
                border: 0,
                backgroundColor: "#d42f2f",
                fontSize: 13,
              }}
              className="btn btn-primary"
              onClick={() => this.props.toggleHorizontalFlip(this.props.horizontalFlip)}
            >
              Flip Horizontal
            </button>
          </div>

          <div className="flip-button">
            <button
              style={{
                width: 175,
                borderRadius: "2px",
                border: 0,
                backgroundColor: "#d42f2f",
                fontSize: 13,
              }}
              className="btn btn-primary"
              onClick={() => this.props.toggleVerticalFlip(this.props.verticalFlip)}
            >
              Flip Vertical
            </button>
          </div>

          <div className="rotation-buttons">
            <button
              style={{
                width: 84.5,
                borderRadius: "2px",
                border: 0,
                backgroundColor: "#d42f2f",
                fontSize: 13,
              }}
              className="btn btn-primary"
              onClick={this.props.rotate90DegreeLeft}
            >
              <i className="fas fa-undo-alt" />
            </button>

            <button
              style={{
                width: 84.5,
                borderRadius: "2px",
                border: 0,
                backgroundColor: "#d42f2f",
                fontSize: 13,
              }}
              className="btn btn-primary"
              onClick={this.props.rotate90DegreeRight}
            >
              <i className="fas fa-redo" />
            </button>
          </div>
          <label htmlFor="" style={{ margin: "4px 0px", color: "#f1f1f1" }}>
            Rotação de ajuste fino:
          </label>
          <Slider
            className={classes.slider}
            value={this.props.inactValue}
            max={45}
            min={-45}
            step={0.1}
            onDragEnd={this.props.resetRotate}
            aria-labelledby="label"
            onChange={this.props.handleFineTuneRotate}
          />
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleHorizontalFlip: (horizontalFlip) => {
    dispatch({
      type: "TOGGLE_HORIZONTAL_FLIP",
      payload: horizontalFlip,
    });
  },
  toggleVerticalFlip: (verticalFlip) => {
    dispatch({
      type: "TOGGLE_VERTICAL_FLIP",
      payload: verticalFlip,
    });
  },
  rotate90DegreeLeft: (e) => {
    dispatch({
      type: "ROTATE_90_DEGREE_LEFT",
      payload: -90,
    });
  },
  rotate90DegreeRight: (e) => {
    dispatch({
      type: "ROTATE_90_DEGREE_RIGHT",
      payload: 90,
    });
  },
  handleFineTuneRotate: (event, value) => {
    dispatch({
      type: "HANDLE_FINE_TUNE_ROTATE",
      payload: value,
    });
  },
  resetRotate: () => {
    dispatch({
      type: "RESET_ROTATE",
    });
  },
});

const mapPropsToState = (state) => ({
  showRotateSection: state.showRotateSection,
  horizontalFlip: state.horizontalFlip,
  fineTuneRotate: state.fineTuneRotate,
  inactValue: state.inactValue,
});

export default withStyles(styles)(
  connect(mapPropsToState, mapDispatchToProps)(RotateSection),
);
