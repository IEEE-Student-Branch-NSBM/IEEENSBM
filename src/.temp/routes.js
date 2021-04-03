const c1 = () => import(/* webpackChunkName: "page--src-pages-wie-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\WIE.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Index.vue")

export default [
  {
    path: "/wie/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
