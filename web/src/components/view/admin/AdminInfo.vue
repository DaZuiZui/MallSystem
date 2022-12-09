<template>
    <div class="AdminIndex">
      <!--头部-->
      <el-row>
        <el-col style="background-color: rgb(84, 80, 100);"><div class="grid-content bg-purple">
          <div>
              <p style="font-size:24px">Logo</p>
          </div>
          </div>
        </el-col>
      </el-row>
      <!--Body-->
      <el-row :gutter="20">
        <!--left body-->
        <el-col :span="10"><div class="grid-content bg-purple">
            <div>
              <Left></Left>
            </div>
          
        </div></el-col>
        
    

        <el-col :span="10"><div class="grid-content bg-purple">
            <el-drawer
                title="修改您的新密码"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose">
                <span>
                    <div>
                        <el-input v-model="password" placeholder="请输入您的密码"></el-input>
                        <hr>
                        <el-button type="primary" icon="el-icon-search" @click="updatePassWord">修改</el-button>
                    </div>
                </span>
            </el-drawer>

            <br><br><br><br><br><br><br><br>
            <el-descriptions title="用户信息">
                <el-descriptions-item label="用户名">{{username}}</el-descriptions-item>
                <el-descriptions-item label="权限等级">管理员</el-descriptions-item>
                <el-descriptions-item label=""></el-descriptions-item>
                <el-descriptions-item label="备注">
                  <el-tag size="small" v-if="(role == 1)">超级管理员</el-tag>
                  <el-tag size="small" v-else-if="(role == 2)">管理员</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="标签组">正常管理员</el-descriptions-item>
            </el-descriptions>
            <el-col :sm="12" :lg="12">
                <el-result icon="info" title="修改密码" subTitle="如果您想要修改密码请点击" >
                  <template slot="extra">
                    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                        点我打开
                      </el-button>
                  </template>
                </el-result>
              </el-col>
        </div></el-col>
      </el-row>  
    </div>
  </template>
    
  <script>
    import {synRequestPost} from "../../../../static/request"
      import Top from '../frame/Top.vue';
      import Left from '../frame/Left.vue'
      export default {
        name: 'AdminIndex',
        components: {Top,Left},
        data() {
        return {
                username: "",
                password: "",
                role: 0,
                drawer: false,
                id: 0,
                direction: 'rtl',
          };
        },
  
        mounted(){
          this.username = getCookie("username");
          this.password = getCookie("password");
          this.role     = getCookie("role");
          this.id       = getCookie("id");
        },

        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            //修改密码
            async updatePassWord(){
                await synRequestPost("/user/update?id="+this.id+"&password="+this.password);
                alert("修改成功");
            }
        }
    }
  </script>
    
   