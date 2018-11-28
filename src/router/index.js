import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import testRouter from '@/components/testRouter'
import testRouter2 from '@/components/test-router2'
import testToast from '@/components/test-toast'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test-router',
      name: 'testRouter',
      component: testRouter
    },
    {
      path: '/test-router2',
      name: 'testRouter2',
      component: testRouter2
    },
    {
      path: '/test-toast',
      name: 'testToast',
      component: testToast
    }
  ]
})
