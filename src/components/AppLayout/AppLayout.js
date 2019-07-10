import React from 'react';

import './styles.scss';

function AppLayout({title, children}) {
  return (
    <div className="app-layout">
      <h1 className="app-header">{title}</h1>
      <section className="app-content">
        {children}
      </section>
      <footer className="app-footer">© Zack Tillotson</footer>
    </div>
  );
}

export default AppLayout;