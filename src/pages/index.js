import React from "react"

import Layout from '../components/Layout';
import TopHat from '../components/TopHat';
import Maze from '../components/Maze';

const IndexPage = () => (
  <Layout title="Home">
    <TopHat>Like my site? Follow my work on <a href="https://GitHub.com/Zack-Tillotson">GitHub</a></TopHat>
    <h1>Welcome</h1>
    <p>I'm a programmer who enjoys implementing complex experiences via well crafted web applications and experimenting with new and exciting tools.</p>
    <p>For example here's a little toy I created to investigate GatsbyJS, CSS Grid, and React Hooks in depth. It's a maze generator which uses a stochastic Depth First Search algorithm. And it has kittens!</p>
    <Maze />
  </Layout>
)

export default IndexPage
