import React from "react"
import {Link} from 'gatsby'

import Layout from '../../../components/AppLayout';

const MazeContainer = () => (
  <Layout title="Maze Maker" rootUrl="/apps/app-maze/">
    <section className="app-layout__content">
      <h2>F.A.Q.</h2>
      <section>
        <h4>1. What am I looking at?</h4>
        <p>This is a visual demonstration of how a maze creation algorithm works.</p>
        <p>The algorithm is a Stochastic Depth-First search algorithm. The maze is a simple graph where each node can connect to up to four neighbors. The algorithm starts at a random point and removes a random wall to connect the two rooms, it then does it again from the new room to an unconnected room. This is repeated until no unconnected rooms are touching the active room, the algorithm then backtracks to the first room with an unconnected neighbord. When all rooms are connected the algorithm & maze are finished.</p>
        <p>Here is a great explanation: <a href="https://www.zackbanack.com/blog/dfs">Zach Banack DFS</a>.</p>
      </section>
      <section>
        <h4>2. Is this a "real" maze? Every room is connected?</h4>
        <p>Yes! When the algorithm is running it is effectively "searching" for a path between the starting point and every other point in the maze, so every point in the maze is connected to every other.</p>
      </section>
      <section>
        <h4>3. What does it mean to say the algorithm is "stochastic"?</h4>
        <p>Stochastic describes something that was randomly determined. In this case it refers to the algorithm randomly choosing which rooms to connect and it's what causes the maze to be different every time. Read more about it: <a href="https://en.wikipedia.org/wiki/Stochastic">Wikipedia</a></p>
      </section>
      <section>
        <h4>4. Are there other ways to make a maze?</h4>
        <p>Many others! Wikipedia has some listed here: <a href="https://en.wikipedia.org/wiki/Maze_generation_algorithm">Maze Generation Algorithms</a>. I chose this algorithm because it's relatively simple to implement and is interesting to visualize.</p>
      </section>
      <section>
        <h4>5. Why did you make this?</h4>
        <p>I wanted to practice using a bunch of modern web app tools and thought this would be a fun way to do so (I was right!).</p>
        <p>Some of the tools I am exploring here are: <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest">Webapp Manifests (aka PWAs)</a>, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Grid</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, and <a href="https://reactjs.org/docs/hooks-reference.html">React Hooks</a>.</p>
      </section>
      <Link className="shift-down" to="/apps/app-maze/">Back</Link>
    </section>
  </Layout>
);

export default MazeContainer;
