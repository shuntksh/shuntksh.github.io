import React from 'react';

import { Link, withPrefix } from 'gatsby';

export const Navbar = ({ lang, title }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to={withPrefix(`/${lang}`)}>
        {title} ({lang})
      </Link>
      {/* <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> */}
    </div>
    {/* <div id="topMenu" className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to={withPrefix(`/${lang}/projects`)}>
          <strong>Projects</strong>
        </Link>
        <Link className="navbar-item" to={withPrefix(`/${lang}/projects`)}>
          <strong>Blog</strong>
        </Link>
        <Link className="navbar-item" to={withPrefix(`/${lang}/projects`)}>
          <strong>About</strong>
        </Link>
      </div>
    </div> */}
  </nav>
);

export default Navbar;
