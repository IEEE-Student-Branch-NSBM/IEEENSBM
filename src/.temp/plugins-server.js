import plugin_gridsome_plugin_netlify_cms_6 from "C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-netlify-cms\\gridsome.client.js"
import plugin_gridsome_plugin_pwa_8 from "C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-pwa\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_netlify_cms_6,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_pwa_8,
    options: {"title":"Gridsome","serviceWorkerPath":"\\service-worker.js","manifestPath":"\\manifest.json","statusBarStyle":"default","themeColor":"#666600","icon":"","appleMaskIcon":"favicon.svg","appleMaskIconColor":"#666600","msTileColor":"#666600","svgFavicon":"favicon.svg"}
  }
]
