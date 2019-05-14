import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Addresses from './views/Addresses.vue'
import AddressForm from './views/AddressForm.vue'
import Posts   from './views/Posts.vue'
import PostsList  from './views/PostsList.vue'

Vue.use(Router)
// 以下実際のroutingの設定
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // ページを増やしたい場合はここで追加を定義する。
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: Addresses
    },
    // :address_id?はアドレスのidが入ることを想定する
    {
      path: '/addresses/:address_id?/edit',
      name: 'address_edit',
      component: AddressForm
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/postsList',
      name: 'postsList',
      component: PostsList
    },
    
    // 下記コンポーネントが増え画面の遷移に時間がかかる際に使用する
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
