import React from 'react';
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/actions';

function Controls({state, requestGeneration}) {
  return (
    <section className="maze__controls">
      <button className="maze__control" onClick={() => requestGeneration()}>
        {state === 'Ready' ? 'Start' : 'Reset'}
      </button>
    </section>
  );
}

export default connect(selector, dispatcher)(Controls);
