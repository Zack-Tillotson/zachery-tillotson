module.exports = {
  siteMetadata: {
    title: `Zachery Tillotson`
    description: `Zachery Tillotson - A guy who loves the coding culture and wants to see the web grow`,
    author: `Zack Tillotson`,
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
        background_color: `#f6f6f6`,
        theme_color: `#c7372a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
