import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import container from '../components/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    }
  ]
})
