import React, { Component } from "react";
import PictureArea from "./PictureArea";

class PicGrid extends Component {
  render() {
    return (
      <div style={grid}>
        <PictureArea pictures={this.props.pictures} markClicked={this.props.markClicked}/>
      </div>
    )
  }
}

const grid = {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  justifyContent: "center",
  gridGap: "15px"
}


export default PicGrid;