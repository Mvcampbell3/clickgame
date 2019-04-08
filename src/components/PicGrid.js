import React, { Component } from "react";
import PictureArea from "./PictureArea";
import style from "../styles/PicGrid.css"

class PicGrid extends Component {

  render() {
    return (
      <div className={this.props.wrong ? "badClass picGrid" : "goodClass picGrid"} style={style}>
        <PictureArea pictures={this.props.pictures} firstStop={this.props.firstStop} />
      </div>
    )
  }
}



export default PicGrid;