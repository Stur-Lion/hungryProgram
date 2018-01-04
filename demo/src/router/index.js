import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import subCommodity from '@/components/subCommodity'
import subCommont from '@/components/subCommont'
import subBusiness from '@/components/subBusiness'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/front/subCommodity',
      name: 'subCommodity',
      component: subCommodity
    },
    {
      path: '/front/subCommont',
      name: 'subCommont',
      component: subCommont
    },
    {
      path: '/front/subBusiness',
      name: 'subBusiness',
      component: subBusiness
    }
  ]
})
