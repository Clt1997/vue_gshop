import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

export default [

  {
    path: '/',
    redirect: './msite'
  },
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/login',
    component: Login,
    meta: {
      xxx: 'abc'
    }
  },
  {
    path: '/profile',
    component: Profile
  }

]
