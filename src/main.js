import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router"

import {Tabbar, TabbarItem,Icon,Search,Swipe, SwipeItem,Col, Row,Image as VanImage,Grid, GridItem } from "vant"
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Grid)
Vue.use(GridItem)


// import { bannerListApi } from '@/api/index'
// async function myFn(){
//   const res = await bannerListApi();
//   console.log(res);
// }
// myFn();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
