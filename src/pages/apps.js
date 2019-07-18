import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Apps = () => (
  <Layout title="Apps">
    <h1>Apps</h1>
    <p>Here are a few of the many apps I've worked on : ]</p>
    <ul>
      <li><a href="https://DiskDraft.com">DiskDraft - Sports League Draft Tool</a></li>
    	<li><Link to="/apps/maze/">Maze Generator</Link></li>
    	<li><Link to="/apps/population-stats/">Population Stats</Link></li>
    </ul>
    <Link to="/" className="shift-down">Go back to the homepage</Link>
  </Layout>
)

export default Apps;
