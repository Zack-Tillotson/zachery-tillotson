import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutMe = () => (
  <Layout title="About Me">
    <h1>About Me</h1>
    <ul>
      <li><a href="https://github.com/Zack-Tillotson">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/zacherytillotson/">LinkedIn</a></li>
      <li><a href="/Resume042018.pdf">PDF Résumé</a></li>
      <li><a href="/Resume042018.docx">Word Résumé</a></li>
    </ul>
    <Link className="shift-down" to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutMe;
