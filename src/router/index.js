import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(VueRouter)

/*const routes = [
  {path:"/",component : () => import('@/views/Movie')}
]*/

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  //routes: routes
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
// 重定向到一级路由movie
{
  path:'/*',
  redirect:'/movie'
}
  ]
})

export default router