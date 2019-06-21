import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import BoardContainer from './containers/BoardContainer';
import RevertContainer from './containers/RevertContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
        <RevertContainer />
      </div>
    );
  }
}

export default hot(module)(App);
