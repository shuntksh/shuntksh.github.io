import React, { useEffect } from 'react';
import { graphql, withPrefix } from 'gatsby';

export default props => {
  useEffect(() => {
    if (window === undefined) {
      return;
    }

    let lang = props.data.site.siteMetadata.defaultLangKey;
    if (navigator) {
      const locale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.userLanguage || navigator.language || navigator.browserLanguage || lang;

      if (props.data.site.siteMetadata.langs.indexOf(locale) >= 0) {
        lang = locale;
      }
    }

    window.location.replace(withPrefix(lang));
  }, []);
  return <></>;
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultLangKey
        langs
      }
    }
  }
`;
