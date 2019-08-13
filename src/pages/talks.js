import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import denverMeetupImage from '../images/denver-meetup.svg';
import aetnaImage from '../images/aetna.svg';

const Talks = () => (
  <Layout title="Technical Talks">
    <h1>Technical Talks</h1>
    <p>My talks and presentations tend to be heavy on real world examples and code so these notes are often fairly minimal, but they do include useful links. Here are a selection of recent presenations:</p>
    <ul className="shift-down">
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1iNLxtMd9GshMbfDYgF6irYz4B03q4dUkc_93WFtPIbA/edit?usp=sharing">
          <img className="app-card__logo" src={aetnaImage} alt="Aetna" />
          <h3 className="app-card__title">Web Components in Design Systems (2019)</h3>
          <p className="app-card__slogan">Aug 11, 2019</p>
          <p className="app-card__desc">A review of the state of Web Component technologies, browser support, and development guidelines.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1n97C4_W-DGc-aZ-yceV-ZiXOOQjtXU_r9wU2jvEAqPk/edit?usp=sharing">
          <img className="app-card__logo" src={aetnaImage} alt="Aetna" />
          <h3 className="app-card__title">CSS Development Guidelines</h3>
          <p className="app-card__slogan">Jun. 5, 2019</p>
          <p className="app-card__desc">Practical development guidelines & patterns for making well written CSS.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1nS5D_lTiQ9XX45JATcpKeKm-gDC9wpI0KTakmZ55DaY/edit?usp=sharing">
          <img className="app-card__logo" src={denverMeetupImage} alt="Denver Javascript Meetup" />
          <h3 className="app-card__title">React Performance</h3>
          <p className="app-card__slogan">Jan. 25, 2019</p>
          <p className="app-card__desc">A presentation I gave for the Denver Javascript Meetup, inspired by performance research I had done into a large, complex React + Redux based application.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1HD8e3tD29NNdvQNkxBqxGen8IJ11UT5D7Y6uraVc074/edit?usp=sharing  ">
          <img className="app-card__logo" src={aetnaImage} alt="Aetna" />
          <h3 className="app-card__title">Web Components</h3>
          <p className="app-card__slogan">Oct. 18, 2018</p>
          <p className="app-card__desc">This was a technical preview of the Web Components pattern for Aetna developers.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/13h3WhJ_OUIwB8X7fQ07KUkYZ9R0NXF4HJ5FMOC72Cxs/edit?usp=sharing">
          <img className="app-card__logo" src={denverMeetupImage} alt="Denver Javascript Meetup" />
          <h3 className="app-card__title">PWAs</h3>
          <p className="app-card__slogan">Apr. 20, 2018</p>
          <p className="app-card__desc">This was a technical preview of the PWA pattern for the Denver Javascript Meetup developers.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1XMtlZupjySN1EO1MZGWau7th2UwWOX5UcDDz6JiaRkE/edit?usp=sharing">
          <img className="app-card__logo" src={aetnaImage} alt="Aetna" />
          <h3 className="app-card__title">Iterators, Generators, and Sagas</h3>
          <p className="app-card__slogan">Mar. 20, 2018</p>
          <p className="app-card__desc">This was a technical preview of the Iterators & Generators tools for Aetna developers, and how this effects the Redux Saga plugin.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
      <li>
        <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1x7aqADCehLCgjfYErO9yPKiA8h5V7X1HsNXWdqLpGjA/edit?usp=sharing">
          <img className="app-card__logo" src={aetnaImage} alt="Aetna" />
          <h3 className="app-card__title">JS Debugging</h3>
          <p className="app-card__slogan">Jan. 15, 2018</p>
          <p className="app-card__desc">This was an overview of modern development tooling for debugging client Javascript code, basically an introduction to Chrome & Firefox developer consoles.</p>
          <p className="app-card__cta">View Slides</p>
        </a>
      </li>
    </ul>
    <Link className="shift-down" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default Talks;
