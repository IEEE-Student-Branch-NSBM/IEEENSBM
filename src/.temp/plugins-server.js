import plugin_gridsome_plugin_netlify_cms_6 from "C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-netlify-cms\\gridsome.client.js"
import plugin_gridsome_plugin_manifest_8 from "C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-manifest\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_netlify_cms_6,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_manifest_8,
    options: {"background_color":"#000000","icon_path":"./src/assets/Logos/SB_Logo.png","name":"IEEE NSBM Student Branch","short_name":"IEEE NSBM Student Branch","theme_color":"#00629B","lang":"en","display":"minimal-ui","file_name":"manifest.json","orientation":"any","scope":"/","start_url":"/","dir":"auto","prefer_related_applications":false,"related_applications":[]}
  }
]
