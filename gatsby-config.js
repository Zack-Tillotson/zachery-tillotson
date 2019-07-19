module.exports = {
  siteMetadata: {
    title: `Zachery Tillotson`,
    description: `Zachery Tillotson - A guy who loves the coding culture and wants to see the web grow`,
    author: `Zachery Tillotson`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-33622205-1",
      },
    },
  ],
}
