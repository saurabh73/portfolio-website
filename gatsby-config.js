require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Saurabh Dutta`,
    description: `Portfolio website for Saurabh Dutta`,
    author: `@saurabh73`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-v2-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true,
    //     printAll: true,
    //     develop: true,
    //     whitelist: ['readmore'],
    //     whitelistPatterns: [/^hamburger.*/, /^overlay-menu.*/],
    //     whitelistPatternsChildren: [/^hamburger.*/, /^overlay-menu.*/],
    //     ignore: ['/react-overlay-menu.css', '/OverlayScrollbars.css', '/sidebar.module.scss', '/styles/_mixins.scss']
    //   }
    // },
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saurabh Dutta`,
        short_name: `SD`,
        description: 'Personal portfolio site of Saurabh Dutta',
        lang: 'en',
        start_url: `/`,
        "background-color": `#00000`,
        "theme-color": `#ffffff`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`,
        icons: [
          {
            src: "src/assets/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "src/assets/images/android-chrome-256x256.png",
            sizes: "256x256",
            type: "image/png"
          }
        ],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-62661207-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 400,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
  ],
};
