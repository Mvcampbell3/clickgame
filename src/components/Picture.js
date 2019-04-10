import React, { Component } from "react";
import "../styles/Picture.css"

class Picture extends Component {
  
  render() {
    return (
      <div className={this.props.picture.win ? "picture win": "picture"} key={this.props.picture.id} onClick={this.props.firstStop.bind(this, this.props.picture.id)}>
        <img src={this.props.picture.url} alt={this.props.picture.name}></img>
      </div>
    )
  }
}

export default Picture;