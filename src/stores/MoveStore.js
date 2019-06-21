import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import Move from '../entities/Move';
import Counter from '../Counter';

class MoveStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.List();
  }

  reduce(state, action) {
    switch(action.type) {
      case ActionTypes.MOVE:
        const id = Counter.increment();
        return state.push(new Move({
          id,
          player: action.player,
          position: action.position,
        }));

      case ActionTypes.REVERT:
        return state.slice(0, action.index);
      
      default:
        return state;
    }
  }
}

export default new MoveStore();
