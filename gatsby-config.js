require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Riski Nugroho Putra`,
    // siteUrl: `https://www.yourdomain.tld`,
    author: 'Riski Nugroho Putra'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `space mono`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "experience"
          },
          {
            singularName: "task",
          },
          {
            singularName: "work",
            queryParams: {
              populate: {
                image: "*",
                tags: "*"
              }
            }
          },
          {
            singularName: "tag",
          }
        ],
        queryLimit: 1000,
      },
    }
  ],
};
