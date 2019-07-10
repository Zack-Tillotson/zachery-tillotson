import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Talks = () => (
  <Layout title="Technical Talks">
    <h1>Technical Talks</h1>
    <p>My talks and presentations tend to be heavy on real world examples and code so these notes are fairly minimal, but they do include useful links.</p>
    <ul>
      <li><Link to="https://docs.google.com/presentation/d/1nS5D_lTiQ9XX45JATcpKeKm-gDC9wpI0KTakmZ55DaY/edit?usp=sharing">React Performance</Link></li>
      <li><Link to="https://docs.google.com/presentation/d/1HD8e3tD29NNdvQNkxBqxGen8IJ11UT5D7Y6uraVc074/edit?usp=sharing  ">Web Components</Link></li>
      <li><Link to="https://docs.google.com/presentation/d/13h3WhJ_OUIwB8X7fQ07KUkYZ9R0NXF4HJ5FMOC72Cxs/edit?usp=sharing">PWAs</Link></li>
      <li><Link to="https://docs.google.com/presentation/d/1XMtlZupjySN1EO1MZGWau7th2UwWOX5UcDDz6JiaRkE/edit?usp=sharing">Iterators, Generators, and Sagas</Link></li>
      <li><Link to="https://docs.google.com/presentation/d/1x7aqADCehLCgjfYErO9yPKiA8h5V7X1HsNXWdqLpGjA/edit?usp=sharing">JS Debugging</Link></li>
    </ul>
    <Link className="shift-down" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default Talks;
