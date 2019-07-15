import React from "react"
import {Link} from 'gatsby';

import AppLayout from '../../../components/AppLayout';
import withStore from '../../../store';
import Options from '../../../components/Maze/Options';


const MazeOptions = () => (
  <AppLayout title="Maze Maker">
    <section className="app-layout__content">
      <h2>Options</h2>
      <Options />
      <Link className="shift-down" to="/apps/app-maze/">Back</Link>
    </section>
  </AppLayout>
)

export default withStore(MazeOptions);
