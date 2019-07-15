import React from 'react';
import {Link} from 'gatsby';

import './styles.scss';

import Layout from '../Layout';

const matchMedia = window.matchMedia('@media all and (display-mode: standalone)');

function AppLayout(props) {

  if(!matchMedia.matches) { // Bypass for non-standalone browsers
    return <Layout {...props} />
  }

  const {title, children, rootUrl, className = ''} = props;

  return (
    <div className={`app-layout ${className}`}>
      <Link to={rootUrl}>
        <h1 className="app-header">{title}</h1>
      </Link>
      <section className="app-content">
        {children}
      </section>
      <footer className="app-footer">© {new Date().getFullYear()} Zack Tillotson</footer>
    </div>
  );
}

export default AppLayout;