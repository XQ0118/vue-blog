import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routers from './routes'
import axios from 'axios'

//全局配置axios
axios.defaults.baseURL = 'https://vue-blog-3f2dc.firebaseio.com'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8); 
//   }
// })

//自定义过滤器
// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase();
// })

// Vue.filter('snippet', function(value) {
//   return value.slice(0, 100) + '...';
// })

// 创建路由
const router = new VueRouter({
  routes: Routers,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
