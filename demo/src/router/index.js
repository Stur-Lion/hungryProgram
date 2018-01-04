import Vue from 'vue'
import Router from 'vue-router'
import subCommodity from '@/components/subCommodity'
import subCommont from '@/components/subCommont'
import subBusiness from '@/components/subBusiness'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'subCommodity',
      component: subCommodity
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
