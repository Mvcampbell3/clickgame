import React, { Component } from "react";
import Picture from "./Picture";


class PictureArea extends Component {
  
  render() {
    return this.props.pictures.map(picture => 
      <Picture picture={picture} key={picture.id} firstStop={this.props.firstStop}/>
    )
  }
}

export default PictureArea;