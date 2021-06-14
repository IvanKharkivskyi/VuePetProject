import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import toyota from '../components/toyota'
import nissan from '../components/nissan'
import honda from '../components/honda'
import car from '../components/car'
import carfull from '../components/carfull'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/toyota',
      name: 'toyota',
      component: toyota
    },
    {
      path: '/nissan',
      name: 'nissan',
      component: nissan
    },
    {
      path: '/honda',
      name: 'honda',
      component: honda
    },
    {
      path: '/car/:id',
      component: car,
      children: [
        {
          path: 'full',
          component: carfull,
          name: 'carFull'
        }
      ]
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {
      x: 0,
      y: 500
    }
  }
})
