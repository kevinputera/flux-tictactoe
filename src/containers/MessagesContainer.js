import React, { Component } from 'react';
import { Container } from 'flux/utils';
import MoveStore from '../stores/MoveStore';
import Messages from '../components/Messages';

import './MessagesContainer.css'

class MessagesContainer extends Component {
  static getStores() {
    return [
      MoveStore
    ];
  }

  static calculateState() {
    return {
      moves: MoveStore.getState(),
    };
  }

  render() {
    return (
      <div className="messages-container">
        <Messages {...this.state} />
      </div>
    );
  }
}

export default Container.create(MessagesContainer);
