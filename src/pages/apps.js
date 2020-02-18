import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Apps = () => (
  <Layout title="Apps">
    <h1>Applications</h1>
    <p>I love to make web applications. I've made dozens of them using all sorts of technologies, here are a few selected apps I've made recently.</p>
    <ul className="shift-down">
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://swplayground.com/" className="app-card">
          <img className="app-card__logo" src="https://images.ctfassets.net/c2zc4p6tmkah/1pUpUF6aNNx8JBH7qG2ptO/7a14d1db41a191a22b2246891d3a4fac/exploded-browser.png?fm=webp&w=700" alt="Elemental Interviewing Logo" />
          <h3 className="app-card__title">SW Playground</h3>
          <p className="app-card__slogan">Learn Service Workers</p>
          <p className="app-card__desc">Have you heard the hype around Service Workers but are confused by how they work? Service Workers are the most powerful new tool available in web browsers today, but are also a totally new paradigm. Get started using Service Workers today.</p>
          <p className="app-card__cta">Visit SW Playground</p>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://elemental-interviewing.web.app/" className="app-card">
          <img className="app-card__logo" src="https://elemental-interviewing.web.app/assets/icons/icon-128.png" alt="Elemental Interviewing Logo" />
          <h3 className="app-card__title">Elemental Interviewing</h3>
          <p className="app-card__slogan">Interviewing simplified</p>
          <p className="app-card__desc">Interviewing comes down to the 3 Elemental questions. To get a great job learn what they are and how to answer them.</p>
          <p className="app-card__cta">Visit Elemental Interviewing</p>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://DiskDraft.com" className="app-card">
          <img className="app-card__logo" src="https://diskdraft.com/assets/logo.png" alt="DiskDraft Logo" />
          <h3 className="app-card__title">DiskDraft</h3>
          <p className="app-card__slogan">Sports League Draft Tool</p>
          <p className="app-card__desc">DiskDraft is a tool used by Rec. sports leagues to draft players at the start of seasons. It's been "in the wild" for several years and I've gotten really positive feedback!</p>
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
        <a target="_blank" rel="noopener noreferrer" href="https://TanyaTillotson.com" className="app-card">
          <img className="app-card__logo" src="https://tanyatillotson.com/assets/tt.png" alt="Tanya Tillotson Logo" />
          <h3 className="app-card__title">Tanya Tillotson</h3>
          <p className="app-card__slogan">Professional portfolio</p>
          <p className="app-card__desc">The professional portfolio for architect Tanya Tillotson.</p>
          <p className="app-card__cta">Visit TanyaTillotson.com</p>
        </a>
      </li>
    </ul>
    <Link to="/" className="shift-down">Go back to the homepage</Link>
  </Layout>
)

export default Apps;
