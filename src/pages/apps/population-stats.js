import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from "../../components/Layout"
import PopulationStats from '../../components/PopulationStats';

const PopulationStatsContainer = () => (
  <Layout title="Population Stats">
    <Helmet>
      <meta name="theme-color" value="#caebf2" />
      <link rel="manifest" href="./manifest.json" />
    </Helmet>
    <h1>Population Stats</h1>

    <p>This app is a demonstration of unintuitive statistical differences in populations.</p>

    <Link to="/apps/" className="shift-down">
      Go back to the list of apps
    </Link>
  </Layout>
)

export default PopulationStatsContainer;
