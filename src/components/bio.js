/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Image from "gatsby-image";

import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Written by <strong>{author}</strong> who lives and works in Seattle building useful things.{' '}
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          You should follow him on Twitter
        </a>
      </p>
    </div>
  );
};

export default Bio;
