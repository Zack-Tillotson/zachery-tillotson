import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import './styles.scss';

import Layout from "../../components/Layout"

const MazeContainer = () => {
	const [installPrompt, saveInstallEvent] = useState(null);
	const [installState, saveInstall] = useState('before');

	useEffect(() => {
		window.addEventListener('beforeinstallprompt ', e => {
		  e.preventDefault();
		  saveInstallEvent(e);
		});
		window.addEventListener('appinstalled', e => {
		  saveInstall('installed');
		});
	});

	const triggerInstall = e => {
		if(!!installPrompt) {
			installPrompt.prompt();
			installPrompt.userChoice.then(result => saveInstall(result.outcome === 'accepted' ? 'installing' : 'rejected'));
		}
	}

	return (
		<Layout title="Maze">
      <Helmet>
        <meta name="theme-color" content="#ff3b3f" />
        <link rel="manifest" href="./manifest.json" />
      </Helmet>

			<h1>Maze Generator</h1>

			<p>A little toy I created to investigate GatsbyJS, CSS Grid, and React Hooks in depth. It's a maze generator which uses a stochastic Depth First Search algorithm. And it has kittens!</p>

			{!!installPrompt && (
				<button onClick={triggerInstall}>Install Maze</button>
			)}

			<div className="install-status">
				{installState === 'before' && !installPrompt && "Preparing installation"}
        {installState === 'before' && !!installPrompt && "Ready to install"}
				{installState === 'installing' && "Installing Maze"}
				{installState === 'installed' && "Maze installation complete"}
			</div>

			<Link to="/apps/">
			  Go back to the list of apps
			</Link>
		</Layout>
	);
}

export default MazeContainer;
