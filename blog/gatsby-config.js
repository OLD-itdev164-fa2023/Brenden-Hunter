
module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDEV-164 Gatsby Blog.`,
    author: `Brenden Hunter`,
    contact:{
        name: 'Brenden Hunter',
        company: 'Blogs Inc.',
        address: 'PO Box 1234'
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    

    {
      resolve:`gatsby-source-contentful`,
      options: {
        spaceId: `jo7xrzmmbayp`,
        accessToken: `ry323X37eq2hU7r3q_7i8zFXfxOOCbRRJ-v3nwemJ60`
      }
    },

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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
