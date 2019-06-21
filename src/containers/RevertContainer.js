import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Actions from '../actions/Actions';
import SnapshotStore from '../stores/SnapshotStore';
import Revert from '../components/Revert';

import './RevertContainer.css';

class RevertContainer extends Component {
  static getStores() {
    return [
      SnapshotStore,
    ];
  }

  static calculateState() {
    return {
      snapshots: SnapshotStore.getState(),
      onClickRevert: Actions.revert,
    };
  }

  render() {
    return (
      <div className="revert-container">
        <Revert {...this.state} /> 
      </div>
    );
  }
}

export default Container.create(RevertContainer);
