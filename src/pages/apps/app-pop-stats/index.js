import React from "react"

import AppLayout from '../../../components/AppLayout';

import PopStats from '../../../components/PopulationStats';
import withStore from '../../../store';


const PopStatsContainer = () => (
  <AppLayout title="Population Statistics">
    <PopStats />
  </AppLayout>
)

export default withStore(PopStatsContainer);