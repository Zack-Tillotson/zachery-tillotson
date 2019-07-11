import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import './styles.scss';

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

			<h1>Maze Generator</h1>

			<p>A little toy I created to investigate GatsbyJS, CSS Grid, and React Hooks in depth. It's a maze generator which uses a stochastic Depth First Search algorithm. And it has kittens!</p>

			{installationPrompt}

			{installStatus}

      <div>
        <a className="button--primary" href="/apps/app-maze/">Launch App</a>
      </div>

			<Link to="/apps/">
			  Go back to the list of apps
			</Link>
		</Layout>
	);
}

export default MazeContainer;
