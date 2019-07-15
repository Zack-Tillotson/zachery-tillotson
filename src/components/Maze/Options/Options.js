import React from "react"
import {connect} from 'react-redux';

import selector from '../state/selector';
import dispatcher from '../state/actions';

import './styles.scss';

const Options = ({options: {showPath, backgroundImage, fastMode}, optionChanged}) => {
  const handleCheckEvent = event => {
    optionChanged(event.target.id, event.target.checked);
  }

  return (
    <section className="maze__options">
      <section className="maze__option">
        <label htmlFor="showPath">
          <span className="option__checkbox">{showPath ? '▣' : '▢'}</span>
          Show search path
        </label>
        <input type="checkbox" checked={showPath} id="showPath" onChange={handleCheckEvent} />
        <p>Shows the path that the algorithm has taken to get to the current "active" node. The algorithm always expands from the active node, so if there are no available nodes to expand to the algorithm backtracks until it finds one.</p>
      </section>
      <section className="maze__option">
        <label htmlFor="fastMode">
          <span className="option__checkbox">{fastMode ? '▣' : '▢'}</span>
          Fast mode
        </label>
        <input type="checkbox" checked={fastMode} id="fastMode" onChange={handleCheckEvent} />
        <p>Checking this option will decrease the time between steps of the algorithm.</p>
      </section>
      <section className="maze__option">
        <label htmlFor="backgroundImage">
          <span className="option__checkbox">{backgroundImage ? '▣' : '▢'}</span>
          Use placekitten.com background
        </label>
        <input type="checkbox" checked={backgroundImage} id="backgroundImage" onChange={handleCheckEvent} />
        <p>Do you want more kittens in your life? Of course you do! When this option is checked the maze will have a kitten background!</p>
      </section>
    </section>
  );
}

export default connect(selector, dispatcher)(Options);
