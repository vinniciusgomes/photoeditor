import React, { Component } from "react";
import { connect } from "react-redux";
import { NativeTypes } from "react-dnd-html5-backend";
import { DropTarget } from "react-dnd";
import Spinner from "react-bootstrap/Spinner";

import Splash from "../Splash";
import "./styles.css";

const nativeFileTarget = {
  hover(props, monitor, component) {
    monitor.isOver({ shallow: true });
  },
  drop(props, monitor, component) {
    component.handleDroppedFiles(monitor);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOverCurrent: monitor.isOver({ shallow: false }),
    itemType: monitor.getItemType(),
    didDrop: monitor.didDrop(),

    isOver: monitor.isOver(),
  };
}

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  handleDroppedFiles(monitor) {
    console.log(`monitor.getItem().files: ${monitor.getItem().files}`);
    this.setState({ showSpinner: true }, () => {
      this.onImageChange({ target: { files: monitor.getItem().files } });
    });
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.fileName = file.name;

      reader.onloadend = (upload) => {
        this.props.handleUploadedFile(upload.target);
      };
      reader.readAsDataURL(file);
    }
  }

  handleCrossClick = (e) => {
    e.stopPropagation();
    localStorage.clear("image");
    this.forceUpdate();
  };

  render() {
    const { connectDropTarget, isOver } = this.props;
    if (this.state.loading) {
      return <Splash />;
    }
    return (
      <div
        style={{ height: "100%" }}
        className="animate__animated animate__bounceIn"
      >
        <div className="wrapper">
          <div className="lower-wrapper">
            <img src="./static/img/logo-white.png" style={{marginTop: -100, marginBottom: 50, width: 350}} />
            {connectDropTarget(
              <div
                className="drag-drop-panel"
                onClick={(e) => this.fileInput.click()}
              >
                {this.state.showSpinner ? (
                  <Spinner animation="grow" variant="danger" />
                ) : isOver ? (
                  <h2>Release to Upload!</h2>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <i
                      className="fal fa-image"
                      style={{ fontSize: 75, marginBottom: 25 }}
                    />
                    <h3>Arraste e solte para fazer upload</h3>
                    <span style={{ fontSize: 17 }}>ou clique aqui</span>
                  </div>
                )}
              </div>
            )}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(e) => this.onImageChange(e)}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispachToProps = (dispatch) => ({
  handleUploadedFile: (file) => {
    dispatch({ type: "HANDLE_FILE_UPLOAD", payload: file });
  },
  setImage: (image, name) => {
    dispatch({
      type: "SET_IMAGE_FROM_WELCOME_SCREEN",
      payload: { result: image, fileName: name },
    });
  },
});

const mapStateToProps = (state) => ({ image: state.image });

export default connect(
  mapStateToProps,
  mapDispachToProps
)(DropTarget(NativeTypes.FILE, nativeFileTarget, collect)(WelcomeScreen));
