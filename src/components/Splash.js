import React, { Component } from "react";

class Splash extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="display-4">Hello</h1>
        <p className="lead">Welcome to the Clicky Game</p>
        <p className="lead">Try to click on a picture you haven't yet</p>
      </div>
    )
  }
}

export default Splash;