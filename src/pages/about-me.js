import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import githubImage from '../images/github.svg';
import linkedInImage from '../images/linkedIn.png';
import headshotImage from '../images/headshot.jpg';
import headshotImage1440 from '../images/headshot-1440.jpg';
import headshotImage768 from '../images/headshot-768.jpg';
import headshotImage415 from '../images/headshot-415.jpg';

const AboutMe = () => (
  <Layout title="About Me">
    <h1>About Me</h1>
    <section className="shift-down two-column">
      <a className="two-column__col-one" href={headshotImage}>
        <picture>
          <source srcset={headshotImage415} media="(max-width: 415px)" />
          <source srcset={headshotImage1440} media="(min-width: 415px) and (max-width: 1440px)" />
          <source srcset={headshotImage768} media="(min-width: 1440px)" />
          <img src={headshotImage} alt="This is me!" />
        </picture>
      </a>
      <ul className="two-column__col-two">
        <li>
          <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://github.com/Zack-Tillotson">
            <img className="app-card__logo" src={githubImage} alt="GitHub" />
            <h3 className="app-card__title">GitHub</h3>
            <p className="app-card__slogan">Code Repositories</p>
            <p className="app-card__desc">My personal code repositories going back a decade.</p>
            <p className="app-card__cta">Open GitHub</p>
          </a>
        </li>
        <li>
          <a className="app-card" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zacherytillotson/">
            <img className="app-card__logo" src={linkedInImage} alt="LinkedIn" />
            <h3 className="app-card__title">LinkedIn</h3>
            <p className="app-card__desc">My obligatory LinkedIn profile.</p>
            <p className="app-card__cta">Open LinkedIn</p>
          </a>
        </li>
        <li>
          <a className="app-card" target="_blank" rel="noopener noreferrer" href="/Resume042018.pdf">
            <div className="app-card__logo" />
            <h3 className="app-card__title">PDF Résumé</h3>
            <p className="app-card__slogan">Last updated Apr. 2018</p>
            <p className="app-card__cta">View File</p>
          </a>
        </li>
        <li>
          <a className="app-card" target="_blank" rel="noopener noreferrer" href="/Resume042018.docx">
            <div className="app-card__logo" />
            <h3 className="app-card__title">Word Résumé</h3>
            <p className="app-card__slogan">Last updated Apr. 2018</p>
            <p className="app-card__cta">View File</p>
          </a>
        </li>
      </ul>
    </section>
    <Link className="shift-down" to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutMe;
