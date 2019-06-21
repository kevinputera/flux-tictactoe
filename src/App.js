import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import BoardContainer from './containers/BoardContainer';
import RevertContainer from './containers/RevertContainer';
import MessagesContainer from './containers/MessagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
        <div className="utils">
          <RevertContainer />
          <MessagesContainer />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
