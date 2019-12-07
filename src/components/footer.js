import React from 'react';

export const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with{' '}
    <a href="https://www.gatsbyjs.org" target="_blank" rel="nofollow noopener noreferrer">
      Gatsby
    </a>
  </footer>
);

export default Footer;
