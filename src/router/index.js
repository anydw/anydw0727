import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)


import Home from "@/pages/Home"
import My from "@/pages/My"
import News from "@/pages/News"
import Search from "@/pages/Search"
import Layout from "@/pages/Layout"

export default new VueRouter({
    routes:[
        {
            path: "/",
            redirect:"/layout"
        },
        {
          path: "/layout",
          component: Layout,
          redirect: '/layout/home',
          children: [
            {
              path: "home",
              component: Home,
              meta:{
                title:"首页"
              }
            },
            {
              path: "search",
              component: Search,
              meta:{
                title:"搜索"
              }
            },
            {
                path: "my",
                component: My,
                meta:{
                  title:"我的"
                }
              }, {
                path: "news",
                component: News,
                meta:{
                  title:"新闻"
                }
              },
          ],
        },
    ],
})