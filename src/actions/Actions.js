import Dispatcher from '../Dispatcher';
import ActionTypes from './ActionTypes';

const actions = {
  move(player, position) {
    Dispatcher.dispatch({
      type: ActionTypes.MOVE,
      player,
      position,
    });
  },

  revert(index) {
    Dispatcher.dispatch({
      type: ActionTypes.REVERT,
      index,
    })
  }
};

export default actions;
