import React, { Component } from "react";
import style from "../styles/Header.css"
class Header extends Component {
  render() {
    return (
      <header style={style}>
        <h1>Skyrim Click Game</h1>
        <h2>Score: {this.props.score}</h2>
        <h2>Left: {this.props.left}</h2>
      </header>
    )
  }
}

export default Header;