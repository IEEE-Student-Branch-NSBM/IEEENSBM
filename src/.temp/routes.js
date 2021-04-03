const c1 = () => import(/* webpackChunkName: "page--src-pages-wie-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\WIE.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-excom-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Excom.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\IntelliJ\\IEEE\\WebSite\\src\\pages\\Index.vue")

export default [
  {
    path: "/wie/",
    component: c1
  },
  {
    path: "/excom/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/blog/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
