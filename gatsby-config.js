module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Assignment Project",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `home`,
        path: `${ __dirname }/Projects/home`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${ __dirname }/Projects/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `authors`,
        path: `${ __dirname }/Projects/authors`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
