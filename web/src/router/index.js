import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminIndex from '@/components/view/admin/AdminIndex'
import AdminTop from '@/components/view/frame/Top'
import UserLogin    from '@/components/view/user/Login'
import UserReg from '@/components/view/user/Regiter'
import AdminLogin from '@/components/view/user/AdminLogin'
import AdminInfo from '@/components/view/admin/AdminInfo'
import GoodType from '@/components/view/admin/GoodType'
import GoodInfo from '@/components/view/admin/GoodInfo'
import AddGood from '@/components/view/admin/AdminADdGood.vue'
import ADminGoddsUpdate from '@/components/view/admin/ADminGoddsUpdate'
import Activity from '@/components/view/admin/Activity'
import AddActivity from '@/components/view/admin/AddActivity'
import UpdateActivity from '@/components/view/admin/AdminUpdateActivity'
import UserList  from '@/components/view/admin/UserAdmin'
import UserUpdateAdmin from '@/components/view/admin/UpdateUserAdmin'
import AdminBlogList from '@/components/view/admin/AdminBlog'
import AdminBlogAdd from '@/components/view/admin/AdminAddBlog'
import UpdateBlog from '@/components/view/admin/UpdateBlog'
import AddCarousel from '@/components/view/admin/AddImage'
import UserIndex from '@/components/view/user/UserIndex'
import CarouselAdmin1 from '@/components/view/admin/ImageAdmin'
import Index from '@/components/view/UserInex'
import UserInfoShop from '@/components/view/UserInfoShopping'
import UserInfo from '@/components/view/UserInfo'
import UserActivity from '@/components/view/UserActivity'
import UserBlog from '@/components/view/UserBlog'
import ViewBlog from '@/components/view/ViewBlog'
import Shop from '@/components/view/ShopCar'
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
    {
      path: '/user/shop',
      name: 'usershop',
      component: Shop
    },
    //查看详细
    {
      path: '/user/blog/view',
      name: 'userblogview',
      component: ViewBlog
    },
    {
      path: '/user/blog',
      name: 'userblog',
      component: UserBlog
    },
    {
      path: '/user/activity',
      name: 'activity',
      component: UserActivity
    },
    {
      path: '/user/info',
      name: 'userinfo',
      component: UserInfo
    },
    //商品集合
    {
      path: '/u/shoppinglist',
      name: 'shoppinglist',
      component: UserInfoShop
    },
    {
      path: '/u/index',
      name: 'ui',
      component: Index
    },
    {
      path: '/user/index1',
      name: 'UserIndex',
      comments: UserIndex,
    },
    //添加轮播图
    {
      path: '/admin/addCarousel',
      name: 'tianjialunbotu',
      component: AddCarousel
    },
    //轮播图管理
    {
      path: '/admin/CarouselAdmin',
      name: 'CarouselAdmin1',
      component: CarouselAdmin1
    },
    //更新博客
    {
      path: "/admin/blog/update",
      name: "UpdateBlog",
      component: UpdateBlog
    },
    //添加文章
    {
      path: '/admin/AdminBlogAdd',
      name: 'AdminBlogAdd',
      component: AdminBlogAdd
    },
    //论坛list
    {
      path: '/admin/blog/list',
      name: 'zuilist',
      component: AdminBlogList
    },
    //用户修改
    {
      path: '/user/update',
      name: 'udpateuser',
      component: UserUpdateAdmin,
    },
    //用户列表
    {
      path: '/admin/user/list',
      name: 'userList',
      component: UserList
    },
    //修改活动
    {
      path: '/admin/UpdateActivity',
      name: 'UpdateActivity',
      component: UpdateActivity
    },
    //添加活动
    {
      path: '/admin/addactivity',
      name: 'acitivity',
      component: AddActivity
    },
    //活动管理面板
    {
      path: "/admin/activity",
      name: "activity",
      component: Activity
    },
    //修改商品与查看项目
    {
      path: '/admin/good/updateGoodsInfo',
      name: 'ADminGoddsUpdate',
      component: ADminGoddsUpdate
    },
    //添加商品
    {
      path: "/admin/push/good",
      name: "pushgood",
      component: AddGood
    },
    //商品信息
    {
      path: "/admin/goodinfo",
      name: 'goodInfo',
      component: GoodInfo
    },
    //商品分裂
    {
      path: "/admin/goodtype",
      name: "goodtype",
      component: GoodType
    },
    //管理员信息
    {
      path: "/admin/info",
      name: "admininfo",
      component: AdminInfo
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
    //管理员登入
    {
      path: '/admin/login',
      name: 'adminlogin',
      component: AdminLogin
    }
  ]
})
