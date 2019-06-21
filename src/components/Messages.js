import React from 'react';
import './Messages.css';

function Messages(props) {
  const moves = props.moves.toJS();
  const messages = moves.map(move => 
    <li className="message">
      {`${move.id}: Player ${move.player} to position ${move.position}`}
    </li>
  );
  return (
    <ul className="messages">
      <i>Moves:</i>
      {messages}
    </ul>
  );
}

export default Messages;
