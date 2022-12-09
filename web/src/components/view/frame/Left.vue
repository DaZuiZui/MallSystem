<template>
    <div class="Top" height="200px">
        <el-row class="tac">
            <el-col :span="12"  >
              <el-menu
                router
                :default-active="this.$route.path"
                height="100px"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>个人中心</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">我的信息</template>
                    <el-menu-item index="/admin/info">个人信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>商品分类管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">商品分类管理</template>
                      <el-menu-item index="/admin/goodtype">商品类型</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>商品信息管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">商品信息管理</template>
                      <el-menu-item index="/admin/goodinfo">商品信息</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>活动公告管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">商品分类管理</template>
                      <el-menu-item index="1-1">商品类型</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>


                  <el-submenu index="10">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">用户管理</template>
                      <el-menu-item index="1-1">用户</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>论坛管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">论坛管理</template>
                      <el-menu-item index="1-1">系统管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="6">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>系统管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">系统管理</template>
                      <el-menu-item index="1-1">轮播图管理</el-menu-item>
                      <el-menu-item index="1-2">新闻资讯</el-menu-item>
                      <el-menu-item index="1-2">客服姑那里</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="11">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>订单管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">订单管理</template>
                      <el-menu-item index="1-1">已支付订单</el-menu-item>
                      <el-menu-item index="1-2">未支付订单</el-menu-item>
                      <el-menu-item index="1-3">已完成订单</el-menu-item>
                      <el-menu-item index="1-4">未完成订单</el-menu-item>
                      <el-menu-item index="1-5">已退款订单</el-menu-item>
                      <el-menu-item index="1-6">未发布订单</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <br>   <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br> 
              </el-menu>
            </el-col>
          </el-row>
    </div>
  </template>
    
  <script>
    import {synRequestPost} from "../../../../static/request"
      export default {
        name: 'Top',
        data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          username: "",
          password: "",
        };
      },


      mounted(){
          this.username = getCookie("username");
          this.password = getCookie("password");
          this.check();
      },

      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        //确认是否为管理员
        async check(){
          var obj = await synRequestPost("/admin/login?username="+this.username+"&password="+this.password);
           console.log("asd"+obj[0]);
           if(obj.length == 0){
              alert("您不是管理员身份");
              window.location.href="http://127.0.0.1:8080/h/user/login";
           }else{
           }
        }
      }
    
      
    }
  </script>
    
 
     