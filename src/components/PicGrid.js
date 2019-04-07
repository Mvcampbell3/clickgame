import React, { Component } from "react";
import PictureArea from "./PictureArea";

class PicGrid extends Component {

  render() {
    return (
      <div className={this.props.wrong ? "badClass picGrid" : "goodClass picGrid"}>
        <PictureArea pictures={this.props.pictures} firstStop={this.props.firstStop} />
      </div>
    )
  }
}



export default PicGrid;