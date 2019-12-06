const config = {
  siteMetadata: {
    title: 'shun.dev',
    author: 'Shun Takahashi',
    description: 'Personal home page of Shun Takahashi',
    siteUrl: 'https://shun.dev',
    social: {
      twitter: 'shuntksh',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-draft',
      options: {
        publishDraft: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Shun Takahashi's Site",
        short_name: 'shun.dev',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'content/assets/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
      },
    },
  ],
};

if (process.env.GOOGLE_ANALYTICS) {
  config.plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS,
    },
  });
}

module.exports = config;
