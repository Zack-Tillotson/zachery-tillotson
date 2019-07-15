import React from 'react';
import {Link} from 'gatsby';

import './styles.scss';

function AppLayout({title, children, rootUrl, className = ''}) {
  return (
    <div className={`app-layout ${className}`}>
      <Link to="/apps/app-maze/">
        <h1 className="app-header">{title}</h1>
      </Link>
      <section className="app-content">
        {children}
      </section>
      <footer className="app-footer">© Zack Tillotson</footer>
    </div>
  );
}

export default AppLayout;