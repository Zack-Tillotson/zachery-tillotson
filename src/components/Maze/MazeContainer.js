import React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/actions';

import useKitten from '../../utils/usePlaceKitten';

import "./styles.scss"

const MazeContainer = ({state, size: {width, height}, grid, path, options, requestGeneration}) => {
  const [ref, imgUrl] = useKitten();

  const mazeStyles = {
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    backgroundImage: `url(${imgUrl})`,
  };

  if(!options.backgroundImage) {
    delete mazeStyles.backgroundImage;
  }

  return (
    <section>
      <section className="maze__controls">
        <h3 className="maze__control">State: {state}</h3>
        {state !== 'Ready' && <button className="maze__control" onClick={() => requestGeneration()}>Reset</button>}
        {state === 'Ready' && <button className="maze__control" onClick={() => requestGeneration()}>Start</button>}
      </section>

      <div className="maze" ref={ref} style={mazeStyles}>
        {new Array(height * width).fill().map((_, i) => (
            <span key={i} className={cn('maze__cell', {
              'maze__cell--top':  grid[i].top,
              'maze__cell--right': grid[i].right,
              'maze__cell--bottom': grid[i].bottom,
              'maze__cell--left': grid[i].left,
              'maze__cell--visited': grid[i].visited,
              'maze__cell--path': options.showPath && path.indexOf(i) >= 0,
              'maze__cell--active-path': path[path.length - 1] === i,
            })} />
          ))
        }
      </div>
    </section>
  );
}

export default connect(selector, dispatcher)(MazeContainer);
