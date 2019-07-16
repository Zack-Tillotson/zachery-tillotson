import React from 'react';
import {Link} from 'gatsby';

import './styles.scss';

import Layout from '../Layout';
import useDisplayModeClient from '../../utils/useDisplayModeClient';

function AppLayout(props) {

  const [isStandalone] = useDisplayModeClient('standalone');

  if(!isStandalone) { // Bypass for non-standalone browsers
    return <Layout {...props} />
  }

  const {title, children, rootUrl, className = ''} = props;

  return (
    <div className={`app-layout`}>
      <Link to={rootUrl}>
        <h1 className="app-header">{title}</h1>
      </Link>
      <section className={`app-content ${className}`}>
        {children}
      </section>
      <footer className="app-footer">© {new Date().getFullYear()} Zack Tillotson</footer>
    </div>
  );
}

export default AppLayout;