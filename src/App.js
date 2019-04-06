import React, { Component } from 'react';
import Header from "./components/Header"
// import Splash from "./components/Splash"
import pictures from "./pictures";
import PicGrid from "./components/PicGrid"

import './App.css';

class App extends Component {
  state = {
    photos: pictures,
    score: 0
  }

  // Need to add gate to stop more than one click
  // Need to figure out way to add effects for right/wrong guesses
  // I think the way to handle it will be through the react router
  // if Correct will send to correct setup, wrong to wrong set up
  // Wrong set up will have classes with animations that run on load
  // Shimmy shimmy shake

  markClicked = (id) => {
    this.setState({
      photos: this.state.photos.map(picture => {
        if (picture.id === id) {
          if (picture.clicked){
            console.log("bad")
            this.setState({score: this.state.score - 1 })
          } else {
            console.log("good");
            this.setState({score: this.state.score + 1 })
          }
          picture.clicked = !picture.clicked
        }
        return picture;
      })
    })
    this.shuffle();
  }

  shuffle = () => {
    let oldArray = this.state.photos;
    let ranNum = Math.floor((Math.random() *5) + 0) + 3;
    console.log(ranNum + " ranNum")
    for (let i = 0 ; i < ranNum ; i++) {
      let first = oldArray.shift();
      oldArray.push(first);
    }
    this.setState({photos: oldArray})
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score}/>
        {/* <Splash /> */}
        <PicGrid pictures={this.state.photos} markClicked={this.markClicked} />
      </div>
    );
  }
}

export default App;
