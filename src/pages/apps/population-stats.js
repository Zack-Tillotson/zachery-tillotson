import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from "../../components/Layout"

const PopulationStatsContainer = () => (
  <Layout title="Population Stats" className="app-landing">
    <Helmet>
      <meta name="theme-color" content="#caebf2" />
      <link rel="manifest" href="./manifest.json" />
    </Helmet>
    <h1>Population Stats</h1>

    <p>This app is a demonstration of unintuitive statistical differences in populations.</p>

    <div>
      <a className="button--primary" href="/apps/app-pop-stats/">Launch App</a>
    </div>

    <Link to="/apps/" className="shift-down">
      Go back to the list of apps
    </Link>
  </Layout>
)

export default PopulationStatsContainer;
