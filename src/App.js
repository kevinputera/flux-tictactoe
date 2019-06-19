import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Flux tic-tac-toe</h1>
      </div>
    );
  }
}

export default hot(module)(App);