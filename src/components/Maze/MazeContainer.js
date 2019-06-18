import React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/actions';

import "./styles.scss"

const MazeContainer = ({state, size: {width, height}, grid, requestGeneration}) => (
  <section onClick={() => requestGeneration()}>
    <h2>Maze {state}</h2>
    <div className="maze" style={{gridTemplateColumns: `repeat(${width}, 1fr)`}}>
      {new Array(height * width).fill().map((_, i) => (
          <span key={i} className={cn('maze__cell', {
            'maze__cell--top':  grid[i].top,
            'maze__cell--right': grid[i].right,
            'maze__cell--bottom': grid[i].bottom,
            'maze__cell--left': grid[i].left,
            'maze__cell--visited': grid[i].visited,
          })} />
        ))
      }
    </div>
  </section>
);

export default connect(selector, dispatcher)(MazeContainer);
