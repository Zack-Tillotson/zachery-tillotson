import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import cn from 'classnames';

import withStore from '../../store';

import Seo from '../Seo';

import './styles.scss';
import './appLanding.scss';

const Layout = ({ isMinimal = true, title, children, rootUrl = '/', className = ''}) => (
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
        <header className={cn('page-header', {'page-header--minimal': isMinimal})}>
          <Link to={rootUrl} className={cn('page-header__header')}>
            {data.site.siteMetadata.title}
          </Link>
          <nav>
            <Link to="/about-me/">Résumé</Link>
            <Link to="/talks/">Technical Talks</Link>
            <Link to="/apps/">Apps</Link>
          </nav>
        </header>
        <main className={`page-main ${className}`}>{children}</main>
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

export default withStore(Layout);
