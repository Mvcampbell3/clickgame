import React, { Component } from 'react';
import Header from "./components/Header"
import Splash from "./components/Splash"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Splash />
      </div>


    );
  }
}

export default App;
