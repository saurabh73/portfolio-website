module.exports = {
  siteMetadata: {
    title: `Saurabh Dutta`,
    description: `Portfolio website for Saurabh Dutta`,
    author: `@saurabh73`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9tpjt9dg',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: true
      }
    },
  ],
};
