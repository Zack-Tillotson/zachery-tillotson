import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Maze from '../../components/Maze';

const MazeContainer = () => (
  <Layout title="Maze">
    <h1>Maze Generator</h1>

    <p>A little toy I created to investigate GatsbyJS, CSS Grid, and React Hooks in depth. It's a maze generator which uses a stochastic Depth First Search algorithm. And it has kittens!</p>
    <Maze />

    <Link to="/apps/">
      Go back to the list of apps
    </Link>
  </Layout>
)

export default MazeContainer;
