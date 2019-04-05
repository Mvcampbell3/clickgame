import React, { Component } from "react";
import style from "../styles/Header.css"
class Header extends Component {
  render() {
    return (
      <header style={style}>
        <h1>Clicky Game</h1>
      </header>
    )
  }
}

export default Header;