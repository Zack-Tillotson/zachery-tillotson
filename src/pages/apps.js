import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Apps = () => (
  <Layout title="Apps">
    <h1>Applications</h1>
    <p>I love to make web applications - I've made dozens both big and small. Here are a few : ]</p>
    <ul>
      <li>
        <a href="https://DiskDraft.com" className="app-card">
          <img className="app-card__logo" src="https://diskdraft.com/assets/logo.png" alt="DiskDraft Logo" />
          <h3 className="app-card__title">DiskDraft</h3>
          <p className="app-card__slogan">Sports League Draft Tool</p>
          <p className="app-card__desc">DiskDraft is a tool used by Rec. sports leagues to draft players at the start of seasons. It's been "in the wild" for several years and has gotten amazing reviews!</p>
          <p className="app-card__cta">Visit DiskDraft.com</p>
        </a>
      </li>
    	<li>
        <Link to="/apps/maze/" className="app-card">
          <img className="app-card__logo" src="/apps/maze/maze-icon-192.png" alt="Make Maker logo" />
          <h3 className="app-card__title">Maze Maker</h3>
          <p className="app-card__slogan">Maze generation toy</p>
          <p className="app-card__desc">A simple standalone toy application which shows you a maze generation algorithm in motion.</p>
          <p className="app-card__cta">See Maze Maker</p>
        </Link>
      </li>
    	<li>
        <Link to="/apps/population-stats/" className="app-card">
          <img className="app-card__logo" src="/apps/population-stats/ps-icon-192.png" alt="Population Stats logo" />
          <h3 className="app-card__title">Population Stats</h3>
          <p className="app-card__slogan">Exploring intution</p>
          <p className="app-card__desc">"If men are only a few inches taller than women on average, how many of the tallest people are women?"</p>
          <p className="app-card__cta">See Population Stats</p>
        </Link>
      </li>
    </ul>
    <Link to="/" className="shift-down">Go back to the homepage</Link>
  </Layout>
)

export default Apps;
