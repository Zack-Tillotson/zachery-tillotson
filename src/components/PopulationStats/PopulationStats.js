import React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/actions';

import "./styles.scss"

const PopulationStatsContainer = ({state, size: {width, height}, grid, path, requestGeneration}) => {

  return (
    <section>
      <section className="ps__controls">
        <h2 className="ps__control">Population Definition</h2>
        <div className="card">
          <h4>Group 1</h4>
          <label htmlFor="p1-avg">Average</label>
          <input id="p1-avg" type="range" min={0} max={1} value={.5} />
          <label htmlFor="p1-stddev">Std Dev</label>
          <input id="p1-stddev" type="range" min={0} max={1} value={.5} />
        </div>
      </section>
      <section>
        <h2>Combined Population Stats</h2>
        <p>Are you surprised?</p>
        <table>
          <thead>
            <tr>
              <th />
              <th>Group 1</th>
              <th>Group 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Top 1%</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default connect(selector, dispatcher)(PopulationStatsContainer);
