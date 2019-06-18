import React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/actions';

import useKitten from './useKitten';

import "./styles.scss"

const MazeContainer = ({state, size: {width, height}, grid, path, requestGeneration, requestInitialization}) => {
  const [ref, imgUrl] = useKitten();

  return (
    <section>
      <h2>Maze {state}</h2>
      <button onClick={() => requestInitialization()}>Reset</button>
      <button onClick={() => requestGeneration()}>Start</button>
      <div className="maze" ref={ref} style={{gridTemplateColumns: `repeat(${width}, 1fr)`, backgroundImage: `url(${imgUrl})`}}>
        {new Array(height * width).fill().map((_, i) => (
            <span key={i} className={cn('maze__cell', {
              'maze__cell--top':  grid[i].top,
              'maze__cell--right': grid[i].right,
              'maze__cell--bottom': grid[i].bottom,
              'maze__cell--left': grid[i].left,
              'maze__cell--visited': grid[i].visited,
              'maze__cell--path': path.indexOf(i) >= 0,
            })} />
          ))
        }
      </div>
    </section>
  );
}

export default connect(selector, dispatcher)(MazeContainer);
