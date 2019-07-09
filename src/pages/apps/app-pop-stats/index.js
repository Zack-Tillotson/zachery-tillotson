import React, {Fragment} from "react"
import { Link } from "gatsby"

import PopStats from '../../../components/PopulationStats';
import withStore from '../../../store';


const PopStatsContainer = () => (
  <Fragment>
    <h1>Population Statistics</h1>
    <PopStats />
    <p>By Zack Tillotson</p>
  </Fragment>
)

export default withStore(PopStatsContainer);