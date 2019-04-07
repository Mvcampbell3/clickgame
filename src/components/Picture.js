import React, { Component } from "react";

class Picture extends Component {
  getColor = () => {
    return {
      cursor: "pointer",
      backgroundColor : this.props.picture.clicked ? "red": "green"
    }
  }
  
  render() {
    return (
      <div className="picture" style={this.getColor()} onClick={this.props.firstStop.bind(this, this.props.picture.id)}>
        <img style={picStyle} src={this.props.picture.url} alt={this.props.picture.name}></img>
      </div>
    )
  }
}

const picStyle = {
  width: "200px",
  height: "auto",
}



export default Picture;