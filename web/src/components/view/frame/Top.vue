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
        <el-menu-item index="1">商城管理系统</el-menu-item>
  
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
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
    
     