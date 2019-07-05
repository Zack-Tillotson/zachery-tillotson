import React from "react"
import { Link } from "gatsby"

import Maze from '../../../components/Maze';
import withStore from '../../../store';


const MazeContainer = () => (
  <Maze />
)

export default withStore(MazeContainer);
