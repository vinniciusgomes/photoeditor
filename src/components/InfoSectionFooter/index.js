import React, { Component } from "react";
import { connect } from "react-redux";

import "./infoSectionFooter.css";

class InfoSectionFooter extends Component {
  render() {
    return (
      <div className="info-wrapper">
        <label htmlFor=""><i className="fal fa-image pr-2" /> Tamanho:</label>
        {`${this.props.width} x ${this.props.height}`}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

const mapPropsToState = (state) => ({
  width: state.width,
  height: state.height,
  imageName: state.imageName,
});

export default connect(mapPropsToState, mapDispatchToProps)(InfoSectionFooter);
