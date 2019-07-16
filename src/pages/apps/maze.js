import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import './styles.scss';
import ctaImage from '../../images/maze-cta.png';

import Layout from "../../components/Layout"
import usePwaInstall from '../../utils/usePwaInstall';

const MazeContainer = () => {
  const [installationPrompt, installStatus] = usePwaInstall();

	return (
		<Layout title="Maze" className="app-landing">
      <Helmet>
        <meta name="theme-color" content="#ff3b3f" />
        <link rel="manifest" href="./manifest.json" />
      </Helmet>

			<h1>Maze Maker</h1>

      <section className="app-briefing">
        <picture className="app-briefing__hero">
          <img src={ctaImage} alt="Example maze being created in Maze Maker" />
        </picture>
        <p className="app-briefing__desc">Maze Maker lets you watch a tireless algorithm create a real, fully functional maze right in front of your eyes! The first toy app I created to explore technologies I'm interested in including PWAs, GatsbyJS, CSS Grid, CSS Custom Properties (variables), and React Hooks.</p>
        <dl className="app-briefing__dl">
          <dt>App Type</dt>
          <dd>PWA (standalone)</dd>
          <dt>Site Type</dt>
          <dd>Staticly generated</dd>
          <dt>Hosting service</dt>
          <dd>Firebase</dd>
          <dt>UI Framework</dt>
          <dd>React + Redux</dd>
          <dt>Installation Status</dt>
          <dd>{installStatus}</dd>
        </dl>
        <div className="app-briefing__cta">
          {installationPrompt}
          <a className="button--primary" href="/apps/app-maze/">Launch App</a>
        </div>
      </section>

      <p>This is a visual demonstration of how a maze creation algorithm works.</p>
      <p>The algorithm is a Stochastic Depth-First search algorithm. The maze is a simple graph where each node can connect to up to four neighbors. The algorithm starts at a random point and removes a random wall to connect the two rooms, it then does it again from the new room to an unconnected room. This is repeated until no unconnected rooms are touching the active room, the algorithm then backtracks to the first room with an unconnected neighbord. When all rooms are connected the algorithm & maze are finished.</p>

      <Link to="/apps/">
        Go back to the list of apps
      </Link>
    </Layout>
  );
}

export default MazeContainer;
