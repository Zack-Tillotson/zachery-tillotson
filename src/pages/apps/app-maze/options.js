import React from "react"
import {Link} from 'gatsby';

import Layout from '../../../components/AppLayout';
import withStore from '../../../store';
import Options from '../../../components/Maze/Options';


const MazeOptions = () => (
  <Layout title="Maze Maker" rootUrl="/apps/app-maze/">
    <section className="app-layout__content">
      <h2>Options</h2>
      <Options />
      <Link className="shift-down" to="/apps/app-maze/">Back</Link>
    </section>
  </Layout>
)

export default withStore(MazeOptions);
