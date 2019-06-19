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
};

export default actions;
