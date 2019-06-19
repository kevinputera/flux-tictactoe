import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import Snapshot from '../entities/Snapshot';

class SnapshotStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.List().push(new Snapshot());
  }

  reduce(state, action) {
    switch(action.type) {
      case ActionTypes.MOVE:
        const latest = state.get(state.count() - 1);
        return state.push(
          latest.set(action.position, action.player)
        );
      
      default:
        return state;
    }
  }
}

export default new SnapshotStore();
