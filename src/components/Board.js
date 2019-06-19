import React, { Component } from 'react';
import "./Board.css";

class Board extends Component {
  renderTile(i) {
    const snapshots = this.props.snapshots;
    const content = snapshots.get(snapshots.count() - 1).get(i);
    return (
      <div 
        key={i}
        className="tile"
        onClick={this.props.winner || content !== ''
          ? () => { /* game is won, do nothing */ } 
          : () => this.props.onClickTile(this.props.player, i)}
      >
        <span className="symbol">
          {content}
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="row">
          {this.renderTile(3)}
          {this.renderTile(4)}
          {this.renderTile(5)}
        </div>
        <div className="row">
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}
        </div>
      </div>
    );
  }
}

export default Board;
