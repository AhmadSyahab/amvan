import Vue from 'vue'
import Router from 'vue-router'
import AmvanPage from '@/components/AmvanPage'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'AmvanPage',
      component: AmvanPage
    }
  ]
})
