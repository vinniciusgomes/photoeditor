import React, { Component } from "react";
import { connect } from "react-redux";

import "./resizeSection.css";

class ResizeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  onKeyPress = (e) => {
    if (e.which === 13) {
      this.props.handleEditExpense(
        this.props.currentInput,
        this.props.labelOfEditedExpense
      );
    }
  };

  handleWidthChange = (e) => {
    this.setState({ width: e.target.value });
  };

  handleHeighthChange = (e) => {
    this.setState({ height: e.target.value });
  };

  render() {
    if (this.props.showResizeSection) {
      return (
        <div className="resize-section-wrapper">
          <div className="resize-section">
            <div className="left-section">
              <label className="label label-resize" htmlFor="resize-width">
                Largura:
              </label>
              <label className="label label-resize" htmlFor="resize-height">
                Altura:
              </label>
            </div>

            <div className="right-section">
              <input
                style={{ width: 75 }}
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={this.props.currentWidth}
                onChange={this.handleWidthChange}
              />
              <input
                style={{ width: 75 }}
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder={this.props.currentHeight}
                onChange={this.handleHeighthChange}
              />
            </div>
          </div>
          <button
            className="btn btn-primary btn-resize-section"
            style={{
              width: 175,
              borderRadius: "2px",
              border: 0,
              backgroundColor: "#3f51b5",
              fontSize: 13,
              marginTop: 20,
            }}
            onClick={() =>
              this.props.submitResizeValues(this.state.width, this.state.height)
            }
          >
            Aplicar
          </button>
        </div>
      );
    }
    return null;
  }
}

const mapDispachToProps = (dispatch) => ({
  submitResizeValues: (resizedWidth, resizedHeight) => {
    dispatch({
      type: "SET_WIDTH_AND_HEIGHT",
      payload: { width: resizedWidth, height: resizedHeight },
    });
  },
});

const mapStateToProps = (state) => ({
  resizedWidth: state.resizeWidth,
  resizedHeight: state.resizeHeight,
  currentWidth: state.width,
  currentHeight: state.height,
  showResizeSection: state.showResizeSection,
});

export default connect(mapStateToProps, mapDispachToProps)(ResizeSection);
