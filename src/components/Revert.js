import React from 'react';
import './Revert.css'

function Revert(props) {
  const snapshots = props.snapshots.toJS();
  const buttons = snapshots.map((snapshot, index) =>
    <button 
      key={index}
      onClick={() => props.onClickRevert(index)}
      className="revert-button"
    >
      {`Revert board to state: ${index}`}
    </button>
  );
  return (
    <div className="revert">
      {buttons}
    </div>
  );
}

export default Revert;