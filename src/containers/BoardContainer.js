import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Actions from '../actions/Actions';
import MoveStore from '../stores/MoveStore';
import SnapshotStore from '../stores/SnapshotStore';
import Board from '../components/Board'; 

import './BoardContainer.css';

class BoardContainer extends Component {
  static getStores() {
    return [ 
      MoveStore,
      SnapshotStore,
    ];
  }

  static calculateState(prevState) {
    return {
      moves: MoveStore.getState(),
      snapshots: SnapshotStore.getState(),
      onClickTile: Actions.move,
    };
  }

  calculateWinner(board) {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of patterns) {
      if (board.get(pattern[0]) !== '' 
          && board.get(pattern[1]) !== '' 
          && board.get(pattern[2]) !== ''
          && board.get(pattern[0]) === board.get(pattern[1])
          && board.get(pattern[1]) === board.get(pattern[2])) {
        return true;
      }
    }

    return false;
  }

  render() {
    const snapshots = this.state.snapshots;
    const winner = this.calculateWinner(snapshots.get(snapshots.count() - 1));

    const moves = this.state.moves;
    let player;
    if (moves && moves.size > 0) {
      player = moves.get(moves.count() - 1).get('player') == 'X' ? 'O' : 'X'; 
    } else {
      player = 'X';
    }

    return (
      <div className="board-container">
        <Board 
          {...this.state} 
          player={player} 
          winner={winner} 
        />
        <div className="status">
          {winner 
            ? `Winner, ${moves.get(moves.count() - 1).get('player')}!` 
            : `Next, ${player}'s turn`}
        </div>
      </div>
    )
  }
}

export default Container.create(BoardContainer);
