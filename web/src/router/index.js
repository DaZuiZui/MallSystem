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
import Orderadmin from '@/components/view/admin/Orderadmin'
import UserChat from '@/components/view/UserChat'
import AdminChatList from '@/components/view/admin/AdminChatList'
import AdminCHatIndex from '@/components/view/admin/AdminChatIndex'
import UserShopCar from '@/components/view/UserShopCar'
import ViewGoods from '@/components/view/ViewGoods'
import Gobuy from '@/components/view/Gobuy'
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
    /**
     * ????????????
     */
    {
      path: '/shop/gobuy',
      name: 'gobuy',
      component: Gobuy
    },
    /**
     *  ??????????????????
     */
    {
      path: '/shop/view',
      name: 'viewshop',
      component: ViewGoods
    },
    /**
     * ???????????????
     */
    {
      path: '/shopcar/list',
      name: 'usershop',
      component: UserShopCar,
    },
    /**
     * ????????????
     */
    {
      path: '/admin/chat/index',
      name: 'adminchatindex',
      component: AdminCHatIndex
    },
    /**
     * ??????????????????
     */
    {
      path: '/admin/chatlist',
      name: 'AdminChatList',
      component: AdminChatList
    },
    /**
     * ????????????
     */
    {
      path: '/user/chat',
      name: 'userChat',
      component: UserChat
    },
    /**
     * ????????????
     */
    {
      path: '/admin/order',
      name: 'orderadmin',
      component: Orderadmin
    },
    /**
     * ????????????
     */
    {
      path: '/user/shop',
      name: 'usershop',
      component: Shop
    },
    //????????????
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
    //????????????
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
    //???????????????
    {
      path: '/admin/addCarousel',
      name: 'tianjialunbotu',
      component: AddCarousel
    },
    //???????????????
    {
      path: '/admin/CarouselAdmin',
      name: 'CarouselAdmin1',
      component: CarouselAdmin1
    },
    //????????????
    {
      path: "/admin/blog/update",
      name: "UpdateBlog",
      component: UpdateBlog
    },
    //????????????
    {
      path: '/admin/AdminBlogAdd',
      name: 'AdminBlogAdd',
      component: AdminBlogAdd
    },
    //??????list
    {
      path: '/admin/blog/list',
      name: 'zuilist',
      component: AdminBlogList
    },
    //????????????
    {
      path: '/user/update',
      name: 'udpateuser',
      component: UserUpdateAdmin,
    },
    //????????????
    {
      path: '/admin/user/list',
      name: 'userList',
      component: UserList
    },
    //????????????
    {
      path: '/admin/UpdateActivity',
      name: 'UpdateActivity',
      component: UpdateActivity
    },
    //????????????
    {
      path: '/admin/addactivity',
      name: 'acitivity',
      component: AddActivity
    },
    //??????????????????
    {
      path: "/admin/activity",
      name: "activity",
      component: Activity
    },
    //???????????????????????????
    {
      path: '/admin/good/updateGoodsInfo',
      name: 'ADminGoddsUpdate',
      component: ADminGoddsUpdate
    },
    //????????????
    {
      path: "/admin/push/good",
      name: "pushgood",
      component: AddGood
    },
    //????????????
    {
      path: "/admin/goodinfo",
      name: 'goodInfo',
      component: GoodInfo
    },
    //????????????
    {
      path: "/admin/goodtype",
      name: "goodtype",
      component: GoodType
    },
    //???????????????
    {
      path: "/admin/info",
      name: "admininfo",
      component: AdminInfo
    },
    //?????????????????????
    {
      path: '/admin/AdminIndex',
      name: 'adminindex',
      component: AdminIndex
    },
    //??????
    {
      path: '/admin/Top',
      name: 'adminTop',
      component: AdminTop
    },
    //??????
    {
      path: '/user/login',
      name: 'userlogin',
      component: UserLogin
    },
    //??????
    {
      path: '/user/reg',
      name: 'userreg',
      component: UserReg
    },
    //???????????????
    {
      path: '/admin/login',
      name: 'adminlogin',
      component: AdminLogin
    }
  ]
})
