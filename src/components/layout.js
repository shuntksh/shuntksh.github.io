import React from 'react';

import { Footer } from './footer';
import { Navbar } from './nav';

const Layout = props => {
  const { location, title, children } = props;

  return (
    <div className="container">
      <Navbar pathname={location.pathname} title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
