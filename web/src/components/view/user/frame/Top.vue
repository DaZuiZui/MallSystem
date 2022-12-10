<template>
    <div class="Top">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item  ><a href="/u/index">首页</a> </el-menu-item>
        <el-menu-item  ><a  href="/h/u/shoppinglist" target="_blank">商品信息</a></el-menu-item>
        <el-menu-item  ><a href="/user/activity"  target="_blank">活动公告</a></el-menu-item>
        <el-menu-item index="4"><a href="/user/blog"  target="_blank">论坛信息</a></el-menu-item>
        <el-menu-item index="4"><a   target="_blank">新闻资讯</a></el-menu-item>
        <el-menu-item index="/user/info"><a href="/user/info"   target="_blank">我的</a></el-menu-item>
        <el-menu-item index="4"><a   target="_blank">购物车</a></el-menu-item>
        <el-menu-item index="4"><a   target="_blank">客服</a></el-menu-item>
      </el-menu>
    </div>
  </template>
    
  <script>
      export default {
        name: 'Top',
        data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          username: "",
          password: ""
        };
      },

      mounted(){
          this.check();
      },

      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        //确认是否为管理员
        async check(){
          var obj = await synRequestPost("/admin/login?username="+this.username+"&password="+this.password);
           console.log(obj[0]);
           if(obj.length == 0){
              alert("您不是管理员身份");
           }else{
           }
        }
      }
    }
  </script>
    
     