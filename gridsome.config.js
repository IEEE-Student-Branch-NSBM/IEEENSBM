// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'IEEE NSBM Student Branch',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#00629B",
        icon_path: "./src/assets/Logos/Icon.png",
        name: "IEEE NSBM Student Branch",
        short_name: "IEEE NSBM Student Branch",
        theme_color: "#00629B",
        lang: "en",
      },
    },
    {
      use: "gridsome-plugin-service-worker",options: {
        networkFirst: {
          routes: ["/"],
          fileTypes: ["document", "script", "style", "image"],
        },
      },

    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    },
  },
}
