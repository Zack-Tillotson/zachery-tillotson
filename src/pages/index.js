import React from "react"

import Layout from '../components/Layout';
import TopHat from '../components/TopHat';

const IndexPage = () => (
  <Layout title="Home" isMinimal={false}>
    <TopHat>Like my site? Follow my work on <a href="https://GitHub.com/Zack-Tillotson">GitHub</a></TopHat>
    <h1>Welcome</h1>
    <p>I'm a programmer who enjoys implementing complex experiences via well crafted web applications and experimenting with new and exciting tools.</p>
  </Layout>
)

export default IndexPage