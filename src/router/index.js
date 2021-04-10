import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载,路由跳转到了组件才去加载
let cart = () => import('../views/cart/cart')
let category = () => import('../views/category/category')
let home = () => import('../views/home/Home')
let profile = () => import('../views/profile/Profile')
let Detail = () => import('../views/detail/Detail')


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/category',
      component:category
    },    
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/detail/:iid',
      component:Detail
    }
]

const router = new VueRouter({
  mode: 'history',

  /**
   * 配置单页应用的基路径,页面这样访问 http://localhost:8080/home/ 和 http://localhost:8080/ 访问的效果是一样的
   */
  // base: '/home',
  
  routes
})

export default router
