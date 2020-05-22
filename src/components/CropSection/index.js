import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";

class CropSection extends Component {
  render() {
    if (this.props.showCropCanvas) {
      return (
        <div className="crop-section-wrapper">
          <div className="crop-section">
            <div className="left-section">
              <label className="label label-resize" htmlFor="resize-width">
                Largura:
              </label>
              <label className="label label-resize" htmlFor="resize-height">
                Altura:
              </label>
            </div>

            <div className="right-section">
              <label htmlFor="">{this.props.cropDivWidth}</label>

              <label htmlFor="">{this.props.cropDivHeight}</label>
            </div>
          </div>
          <button
            style={{
              borderRadius: "2px",
              border: 0,
              backgroundColor: "#d42f2f",
              fontSize: 13,
            }}
            className="btn btn-primary btn-block btn-crop-section"
            onClick={() => this.props.handleCropImage(this.props.cropImage)}
          >
            Cortar
          </button>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  cropDivWidth: state.cropDivWidth,
  cropDivHeight: state.cropDivHeight,
  cropDivTop: state.cropDivTop,
  cropDivLeft: state.cropDivLeft,
  showCropCanvas: state.showCropCanvas,
  cropImage: state.cropImage,
});

const mapDispatchToProps = (dispatch) => ({
  handleCropImage: (cropImage) => {
    dispatch({ type: "CROP_IMAGE", payload: cropImage });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CropSection);
