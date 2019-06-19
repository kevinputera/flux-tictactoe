import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import BoardContainer from './containers/BoardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
      </div>
    );
  }
}

export default hot(module)(App);
