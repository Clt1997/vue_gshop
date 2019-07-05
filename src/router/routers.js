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
    component: Msite,
    meta: {
      showfoot: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showfoot: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showfoot: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showfoot: true
    }
  },
  {
    path: '/login',
    component: Login
  }
]
