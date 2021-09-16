module.exports = {
  siteMetadata: {
    siteUrl: "https://www.fahim.tech",
    title: "Fahim Faisal",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
