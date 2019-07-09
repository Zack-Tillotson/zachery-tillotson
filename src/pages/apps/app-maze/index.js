import React, {Fragment} from "react"
import { Link } from "gatsby"

import Maze from '../../../components/Maze';
import withStore from '../../../store';


const MazeContainer = () => (
  <Fragment>
    <h1>Maze Generator</h1>
    <Maze />
    <p>By Zack Tillotson</p>
  </Fragment>
)

export default withStore(MazeContainer);
