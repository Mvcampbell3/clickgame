import React, { Component } from "react";
import Hearts from "../components/Hearts";
import style from "../styles/Scoreboard.css"


class ScoreBoard extends Component {
  placeHearts() {
    let retArr = [];
    for (let i = 0; i < this.props.health; i++) {
      console.log(i);
      retArr.push(<Hearts key={i}/>)
    }
    return retArr;
  }

  render() {
    return (
      <div className="scoreboard" style={style}>
        <h2>Score: {this.props.score}</h2>
        <h2>Left: {this.props.left}</h2>
        <h2>Health: {this.placeHearts()}</h2>
      </div>
    )
  }
}

export default ScoreBoard;