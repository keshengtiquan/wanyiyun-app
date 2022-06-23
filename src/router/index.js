import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
import routes from './config'
const router = new vueRouter({
  routes,
  mode: 'history'
})
export default router