import React, { Component } from 'react';
import Header from "./components/Header"
import Splash from "./components/Splash"
import pictures from "./pictures";
import PicGrid from "./components/PicGrid"

import './App.css';

class App extends Component {
  state = {
    photos: pictures
  }

  markClicked = (id) => {
    console.log(id);
    this.setState({ photos: this.state.photos.map(picture => {
      if (picture.id === id) {
        picture.clicked = !picture.clicked
      }
      return picture;
    })})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Splash />
        <PicGrid pictures={this.state.photos} markClicked={this.markClicked}/>
      </div>
    );
  }
}

export default App;
