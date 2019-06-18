import React from "react"

import Layout from '../components/Layout';
import TopHat from '../components/TopHat';
import Maze from '../components/Maze';

const IndexPage = () => (
  <Layout title="Home">
    <TopHat>Like my site? Follow my work on <a href="https://GitHub.com/Zack-Tillotson">GitHub</a></TopHat>
    <h1>Welcome to my site</h1>
    <Maze />
  </Layout>
)

export default IndexPage
