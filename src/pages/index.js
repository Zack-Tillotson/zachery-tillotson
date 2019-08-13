import React from "react"

import Layout from '../components/Layout';
import TopHat from '../components/TopHat';
import mountains from '../../static/mountains.svg';

const IndexPage = () => (
  <Layout title="Home" isMinimal={false} className="home-layout">
    <TopHat>Like my site? Follow my work on <a href="https://GitHub.com/Zack-Tillotson">GitHub</a></TopHat>
    <h1>Welcome</h1>
    <p>I'm a programmer who enjoys implementing complex experiences via well crafted web applications and experimenting with new and exciting tools.</p>
    <img className="home-background" src={mountains} alt="pretty mountains" />
  </Layout>
)

export default IndexPage