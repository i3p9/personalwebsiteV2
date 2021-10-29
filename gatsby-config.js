module.exports = {
  siteMetadata: {
    siteUrl: "https://www.fahim.tech",
    title: "Fahim Faisal",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-reading-time",
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-highlight-code",
            options: {
              terminal: "carbon",
              theme: "dracula",
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Fahim Faisal",
        short_name: "Fahim",
        start_url: "/",
        icon: "src/images/icon.png",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "standalone",
        theme_color_in_head: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "./src/markdown-pages/"
      },
    },
  ],
};
