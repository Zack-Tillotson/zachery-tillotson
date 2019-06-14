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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zachery-Tillotson`,
        short_name: `Tillotson`,
        start_url: `/`,
        background_color: `#5f615f`,
        theme_color: `#707e74`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
