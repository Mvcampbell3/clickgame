import React, { Component } from "react";
import style from "../styles/Header.css"
class Header extends Component {
  render() {
    return (
      <header style={style}>
        <h1>UFC 3 Click Game</h1>
        <h2>Score: {this.props.score}</h2>
      </header>
    )
  }
}

export default Header;