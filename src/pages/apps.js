import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Apps = () => (
  <Layout title="Apps">
    <h1>Apps</h1>
    <p>Check out some of the applications I've developed.</p>
    <Link to="/apps/maze/">Maze Generator</Link>
    <Link to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default Apps;
