const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {

    config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ]);
    }
  });
}
