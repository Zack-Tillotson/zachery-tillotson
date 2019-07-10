import React from "react"

import AppLayout from '../../../components/AppLayout';
import Maze from '../../../components/Maze';
import withStore from '../../../store';


const MazeContainer = () => (
  <AppLayout title="Maze Generator">
    <Maze />
  </AppLayout>
)

export default withStore(MazeContainer);
