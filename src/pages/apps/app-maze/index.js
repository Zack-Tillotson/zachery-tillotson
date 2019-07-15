import React from "react"
import { Link } from "gatsby"

import AppLayout from '../../../components/AppLayout';
import Maze from '../../../components/Maze';
import withStore from '../../../store';


const MazeContainer = () => (
  <AppLayout title="Maze Maker" rootUrl="/apps/app-maze/">
    <Maze />
    <section>
      <Link to="/apps/app-maze/about">FAQ</Link>
      <Link to="/apps/app-maze/options">Options</Link>
    </section>
  </AppLayout>
)

export default withStore(MazeContainer);
