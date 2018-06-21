import Vue from "vue"
import VueRouter from "vue-router"
import _ from "lodash"
import "asset/js/flexible"
import App from "./app"
import routes from "routers"
import store from "./store"
import config from "utils/static"
import VueCookie from "vue-cookie"

window._ = _;
window.config = config;

Vue.use(VueRouter)
Vue.use(VueCookie);



let router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  el: '#root',
  render: h => h(App)
})
