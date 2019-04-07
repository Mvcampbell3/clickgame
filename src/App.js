import React, { Component } from 'react';
import Header from "./components/Header"
import pictures from "./pictures";
import PicGrid from "./components/PicGrid"

import './App.css';

class App extends Component {
  state = {
    photos: pictures,
    score: 0,
    wrong: false,
    left: pictures.length
  }

  firstStop = (id) => {
    this.setState({ wrong: false });
    setTimeout(()=>{
      this.markClicked(id);
    }, 50)
  }


  markClicked = (id) => {
    this.setState({
      photos: this.state.photos.map(picture => {
        if (picture.id === id) {
          if (picture.clicked) {
            console.log("bad")
            this.setState({ score: this.state.score - 1, wrong: true })

          } else {
            console.log("good");
            this.setState({ score: this.state.score + 1, wrong: false , left: this.state.left - 1})
            picture.clicked = !picture.clicked;
            if (this.state.left === 0) {
              console.log("Game Over")
              // window.location.reload();
              // Want to sdo game over stuff
            }
          }
        }
        return picture;
      })
    })
    this.shuffle();
  }

  shuffle = () => {
    let oldArray = this.state.photos;
    let stopPlace = oldArray.length;
    let holder;
    let ranNum;

    while (0 !== stopPlace) {

      ranNum = Math.floor(Math.random() * stopPlace);
      stopPlace = stopPlace - 1;

      holder = oldArray[stopPlace];
      oldArray[stopPlace] = oldArray[ranNum];
      oldArray[ranNum] = holder;
    }

    return this.setState({ photos: oldArray });

  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} left={this.state.left}/>
        <PicGrid pictures={this.state.photos} wrong={this.state.wrong} firstStop={this.firstStop} />
      </div>
    );
  }
}

export default App;
