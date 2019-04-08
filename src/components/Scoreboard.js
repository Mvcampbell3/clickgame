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
          <h2>Score: {this.props.score}</h2>
          <h2>High Score: {this.props.highscore}</h2>
        </div>
        <h2 className="board" style={this.getColor()}>{this.order()}</h2>
        <h2 className="board">Left: {this.props.left}</h2>
      </div>
    )
  }
}



export default ScoreBoard;