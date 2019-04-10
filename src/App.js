import React, { Component } from 'react';
import Header from "./components/Header"
import pictures from "./pictures";
import PicGrid from "./components/PicGrid"
import Scoreboard from "./components/Scoreboard";

import './App.css';

class App extends Component {
  state = {
    photos: pictures,
    score: 0,
    wrong: false,
    left: pictures.length,
    highscore: 0,
    last: "",
    wasWrong: "empty",
    win: false
  }

  firstStop = (id) => {
    this.setState({ wrong: false });
    setTimeout(() => {
      this.markClicked(id);
    }, 50)
  }


  markClicked = (id) => {
    this.setState({
      photos: this.state.photos.map(picture => {
        if (picture.id === id) {
          this.setState({ last: picture.name })
          if (picture.clicked) {
            console.log("bad")
            this.setState({
              wrong: true,
              wasWrong: true
            })
            // game-over bad area
            if (this.state.score > this.state.highscore) {
              console.log("new high score");
              this.setState({
                highscore: this.state.score,
              })
            }
            this.resetGame();

          } else {
            console.log("good");
            this.setState({
              score: this.state.score + 1,
              wrong: false,
              wasWrong: false,
              left: this.state.left - 1
            });

            picture.clicked = !picture.clicked;

            if (this.state.left === 0) {
              console.log("Game Over");
              this.setState({
                win: true,
                highscore: this.state.score,
                photos: this.state.photos.map(winpic => {
                  winpic.win = true;
                  return winpic
                })
              })
              setTimeout(() => {
                console.log("ran timeout function")
                this.resetGame();
              }, 3000)

            }
          }
        }
        return picture;
      })
    })
    this.shuffle();
  }

  resetGame = () => {
    this.setState({
      score: 0,
      win: false,
      left: pictures.length,
      photos: this.state.photos.map(picture => {
        picture.clicked = false;
        picture.win = false;
        return picture
      })
    });
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
        <Header />
        <Scoreboard
          score={this.state.score}
          left={this.state.left}
          highscore={this.state.highscore}
          last={this.state.last}
          wasWrong={this.state.wasWrong}
        />

        <PicGrid
          pictures={this.state.photos}
          wrong={this.state.wrong}
          firstStop={this.firstStop}
          win={this.state.win}
        />
      </div>
    );
  }
}

export default App;
