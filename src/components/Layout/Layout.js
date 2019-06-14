/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Seo from '../Seo';

import "./styles.scss"

const Layout = ({ title, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo title={title} />
        <header className="page-header">
          <Link to="/" className="page-header__header">
            {data.site.siteMetadata.title}
          </Link>
          <navigation>
            <Link to="/resume/">Résumé</Link>
            <Link to="/talks/">Technical Talks</Link>
          </navigation>
        </header>
        <main className="page-main">{children}</main>
        <footer className="page-footer">
          © {new Date().getFullYear()} - Feel free to check out the code on my GitHub account.
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
