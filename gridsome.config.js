// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'IEEE NSBM Student Branch',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'foeyko5o4as8', // required
        accessToken: 'a74bXppS6AEyLjDWb5WzI_wlfF-vgLt4zmZRHcMAa2A', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
  templates: {
    ContentfulPosts: '/blog/:slug',
  }
}
