import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminIndex from '@/components/view/admin/AdminIndex'
import AdminTop from '@/components/view/frame/Top'
import UserLogin    from '@/components/view/user/Login'
import UserReg from '@/components/view/user/Regiter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/h',
  routes: [
    {
      path: '/asd',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //管理员面板主页
    {
      path: '/admin/AdminIndex',
      name: 'adminindex',
      component: AdminIndex
    },
    //头部
    {
      path: '/admin/Top',
      name: 'adminTop',
      component: AdminTop
    },
    //登入
    {
      path: '/user/login',
      name: 'userlogin',
      component: UserLogin
    },
    //注册
    {
      path: '/user/reg',
      name: 'userreg',
      component: UserReg
    },
  ]
})
