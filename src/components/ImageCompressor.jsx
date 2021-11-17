/* eslint-disable react/prop-types */
import React from "react";
import CompressImage from "../react-image-compressor/src/components/file-upload-1280x640.png"
import imageCompression from "browser-image-compression";
import Card from "react-bootstrap/Card";
import ImgProfile from "./final.png";

class imageCompressor extends React.Component {
  constructor() {
    super();
    this.state = {
      compressedLink:
        "https://allcompressimage.com/static/media/file-upload-1280x640.png",
      originalImage: "",
      originalLink: "",
      clicked: false,
      uploadImage: false
    };
    this.imageStyle = {
      height: "213px",
      width: "400px",
      borderRadius: "2px"
    };
  }

  handle = e => {
    const imageFile = e.target.files[0];
    this.setState({
      originalLink: URL.createObjectURL(imageFile),
      originalImage: imageFile,
      outputFileName: imageFile.name,
      uploadImage: true
    });
  };

  changeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  click = e => {
    e.preventDefault();

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 2048,
      initialQuality: 0.5,
      useWebWorker: true
    };

    if (options.maxSizeMB >= this.state.originalImage.size / 200) {
      alert("Bring a bigger image");
      return 0;
    }

    let output;
    imageCompression(this.state.originalImage, options).then(x => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      this.setState({
        compressedLink: downloadLink
      });
    });

    this.setState({ clicked: true });
    return 1;
  };

  render() {
    return (
      <div className="m-5">
        <div className="text-dark text-center">
          <div id="wrapper" className="width">
            <div id="header-wrapper">
              <div id="header">
                <div id="header-left">
                  <img id="logo" src={ImgProfile} width="15%" alt="LOGO" />
                  <h1 className="logo_text">
                    100% <span className="red">Free</span> and Fast
                  </h1>
                  <ol>
                    <li>
                      Select .jpg , .jpeg , .png , .svg , .gif images from you
                      device. Wait for the compression to finish.
                    </li>
                    <li>Download compressed images very easily and quick.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="line" />
        <br />
        <div className="row mt-2">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
            {this.state.uploadImage ? (
              <Img style={this.imageStyle} url={this.state.originalLink} />
            ) : (
              <Img
                style={this.imageStyle}
                src={CompressImage}
              />
            )}
            <Button handle={this.handle} input />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12  mt-3 col-sm-12 d-flex justify-content-center align-items-baseline">
            <br />
            <div className="comStyle">
              {this.state.outputFileName ? (
                <button
                  type="button"
                  className=" btn btn-dark"
                  onClick={e => this.click(e)}
                >
                  Compress
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
            <Img url={this.state.compressedLink} style={this.imageStyle} />
            {this.state.clicked ? (
              <Button
                href={this.state.compressedLink}
                download={this.state.outputFileName}
              />
            ) : (
              /* <div className="d-flex justify-content-center">
                 <a
                   href={this.state.compressedLink}
              
                   download={this.state.outputFileName}
                   className="mt-4 btn btn-dark w-75"
                 >
                   Download
                 </a>
               </div> */

              <></>
            )}
          </div>
        </div>

        <hr className="line2" />
      </div>
    );
  }
}

export default imageCompressor;

const Img = props => (
  <div className="">
    <Card.Img
      className=" tt imageStyle"
      style={props.imageStyle}
      variant="top"
      src={props.url}
    ></Card.Img>
  </div>
);
const Button = props => (
  <div className="choose">
    <div className="d-flex justify-content-center">
      {props.input ? (
        <input
          type="file"
          accept="image/*"
          style={{ marginLeft: "5%" }}
          className="mt-4 btn btn-dark w-75"
          onChange={e => props.handle(e)}
        />
      ) : (
        <a
          href={props.href}
          download={props.download}
          className="mt-4 btn btn-dark w-75"
        >
          Download
        </a>
      )}
    </div>
  </div>
);
