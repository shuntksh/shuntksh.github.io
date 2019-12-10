import React from 'react';

import { Footer } from './footer';
import { Navbar } from './nav';

import '../styles.sass';

const Layout = props => {
  const { location, title, children, lang } = props;

  return (
    <div className="container">
      <Navbar pathname={location.pathname} title={title} lang={lang} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
