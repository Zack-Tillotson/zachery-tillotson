import React from 'react';
import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/actions';

import "./styles.scss"

const PopulationStatsContainer = ({definitions, stats, definitionChanged, generate}) => {

  const handleInputChange = (event) => {
    const {target} = event;

    const id = parseInt(target.name.split('-')[0]);
    const name = target.dataset['name'];
    const value = target.value;

    definitionChanged(id, name, value);
  }

  return (
    <section className="population-stats">
      <section className="ps__controls">
        <h2 className="ps__control">Population Definition</h2>
        {definitions.map(group => (
          <div key={group.id} className="card">
            <h4>{group.name}</h4>
            <label htmlFor={`${group.id}-p-avg`}>Average ({group.mean})</label>
            <input name={`${group.id}-p-avg`} type="range" min={0} max={1} value={group.mean} step={.01} data-name="mean" onChange={handleInputChange} />
            <label htmlFor={`${group.id}-p-stddev`}>Std Dev ({group.stdDev})</label>
            <input name={`${group.id}-p-stddev`} type="range" min={0} max={1} value={group.stdDev} step={.01} data-name="stdDev" onChange={handleInputChange} />
          </div>
        ))}
        <button onClick={generate}>Generate Stats</button>
      </section>
      {!!stats.length && (
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
              {stats.map(stat => (
                <tr key={stat.name}>
                  <td>{stat.name}</td>
                  {stat.groups.map((group, index) => (
                    <td key={index}>{group} ({parseInt(group * 10000 / stat.groups.reduce((soFar, item) => soFar + item, 0)) / 100}%)</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}

export default connect(selector, dispatcher)(PopulationStatsContainer);
