import React, { Component } from "react";
import style from "../styles/Scoreboard.css"


class ScoreBoard extends Component {
  getColor = () => {
    return {
      color: this.props.wasWrong ? "red" : "green" 

    }

  }

  order = () => {
    if (this.props.wasWrong === "empty"){
      return "";
    } else if (this.props.wasWrong === true) {
      return "You Chose Poorly"
    }
    return "You Chose Wisely"
  }

  render() {
    return (
      <div className="scoreboard" style={style}>
        <div className="scores board">
          <h3>Score: {this.props.score}</h3>
          <h3>High Score: {this.props.highscore}</h3>
        </div>
        <h3 className="board" style={this.getColor()}>{this.order()}</h3>
        <h3 className="board">Left: {this.props.left}</h3>
      </div>
    )
  }
}



export default ScoreBoard;