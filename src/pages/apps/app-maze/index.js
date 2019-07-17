import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../../../components/AppLayout';
import Maze from '../../../components/Maze';
import Controls from '../../../components/Maze/Controls';
import withStore from '../../../store';

const MazeContainer = () => {
  return (
    <Layout title="Maze Maker" rootUrl="/apps/app-maze/" className="maze__layout">
      <Helmet>
        <meta name="theme-color" content="#ff3b3f" />
        <link rel="manifest" href="/apps/maze/manifest.json" />
      </Helmet>

      <Maze />
      <section className="maze__desc">
        <Controls />
        <h2>Watch a maze be created!</h2>

        <Link className="page-link" to="/apps/app-maze/about">FAQ</Link>
        <Link className="page-link" to="/apps/app-maze/options">Options</Link>
      </section>
    </Layout>
  );
}

export default withStore(MazeContainer);
