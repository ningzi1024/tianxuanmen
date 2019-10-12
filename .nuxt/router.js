import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7854336 = () => interopDefault(import('../pages/aboutUs.vue' /* webpackChunkName: "pages/aboutUs" */))
const _cb092616 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _092f752c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutUs",
    component: _a7854336,
    name: "aboutUs"
  }, {
    path: "/home",
    component: _cb092616,
    name: "home"
  }, {
    path: "/",
    component: _092f752c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
