import React, { Component } from "react";
import { connect } from "react-redux";

import "./header.css";

class Header extends Component {
  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.fileName = file.name;

      reader.onloadend = (upload) => {
        this.props.handleUploadedFile(upload.target);
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="header-container">
        <div className="left-side">
          <div
            className="header-icons"
            onClick={() => this.fileInput.click()}
            data-tip="Upload Image"
          >
            <i className="fas fa-lg fa-file-upload" />
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) => this.onImageChange(e)}
            ref={(fileInput) => (this.fileInput = fileInput)}
          />
        </div>
        <div className="right-side">
          <div>
            {this.props.image ? (
              <button
                className="btn btn-success"
                style={{
                  borderRadius: "2px",
                  border: 0,
                  backgroundColor: "#3f51b5",
                  fontSize: 13
                }}
                onClick={this.props.setDownloadImageFlag}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Salvar imagem"
              >
                Salvar imagem
                <i className="fas fa-file-download fa-lg pl-2" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUploadedFile: (e) => {
      dispatch({ type: "HANDLE_FILE_UPLOAD", payload: e });
    },
    setDownloadImageFlag: () => {
      dispatch({ type: "SET_DOWNLOAD_IMAGE_FLAG" });
    },
  };
};

const mapPropsToState = (state) => {
  return {
    errorMessage: state.errorMessage,
    image: state.image,
    imageName: state.imageName,
    imgURL: state.imgURL,
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(Header);
