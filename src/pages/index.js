import React, { useEffect } from 'react';
import { graphql, withPrefix } from 'gatsby';

export default props => {
  useEffect(() => {
    if (window === undefined) {
      return;
    }
    window.location.replace(withPrefix(props.data.site.siteMetadata.defaultLangKey));
  }, []);
  return <></>;
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultLangKey
      }
    }
  }
`;
