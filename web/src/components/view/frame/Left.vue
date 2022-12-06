<template>
    <div class="Top">
        <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
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
                    <el-menu-item index="1-1">修改密码</el-menu-item>
                    <el-menu-item index="1-2">个人信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>商品分类管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">商品分类管理</template>
                      <el-menu-item index="1-1">商品类型</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>商品信息管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">商品信息管理</template>
                      <el-menu-item index="1-1">商品信息</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>活动公告管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">商品分类管理</template>
                      <el-menu-item index="1-1">商品类型</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>


                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
    </div>
  </template>
    
  <script>
      export default {
        name: 'Top',
        data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    
      
    }
  </script>
    
     