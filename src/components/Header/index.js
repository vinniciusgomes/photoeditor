import React, { Component } from "react";
import { connect } from "react-redux";

import "./header.css";

class Header extends Component {
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

  render() {
    return (
      <div className="header-container">
        <div className="left-side">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <img
              src="./static/img/icon.png"
              style={{ height: 30, marginTop: 6, marginRight: 20 }}
            />
          </div>

          <div
            className="header-icons"
            onClick={() => this.fileInput.click()}
            data-tip="Upload Image"
            style={{ cursor: "pointer", fontSize: 12 }}
          >
            <i className="fal fa-lg fa-file-upload pr-2" style={{fontSize: 20, marginTop: 3}} />
            Nova imagem
          </div>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) => this.onImageChange(e)}
            ref={(fileInput) => (this.fileInput = fileInput)}
            accept="image/*"
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
                  backgroundColor: "#d42f2f",
                  fontSize: 13,
                }}
                onClick={this.props.setDownloadImageFlag}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Salvar imagem"
              >
                Salvar imagem
                <i className="fal fa-file-download fa-lg pl-2" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleUploadedFile: (e) => {
    dispatch({ type: "HANDLE_FILE_UPLOAD", payload: e });
  },
  setDownloadImageFlag: () => {
    dispatch({ type: "SET_DOWNLOAD_IMAGE_FLAG" });
  },
});

const mapPropsToState = (state) => ({
  errorMessage: state.errorMessage,
  image: state.image,
  imageName: state.imageName,
  imgURL: state.imgURL,
});

export default connect(mapPropsToState, mapDispatchToProps)(Header);
