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
       
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">用户索引</th>
                    <th scope="col">操作</th>
           
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(obj,index) in list" :key="index">
                    <th scope="row">1</th>
                    <td>{{obj.user_id}}</td>
                    <td>
                        <button type="button" class="btn btn-primary" 
                        @click="goChatIndex(obj.user_id)">查看</button>
                    </td>
                  </tr>
                  
                </tbody>
            </table>
        </div></el-col>
      </el-row>  
    </div>
  </template>
    
  <script>
      import Top from '../frame/Top.vue';
      import Left from '../frame/Left.vue'
      import {synRequestPost} from "../../../../static/request"
      export default {
        name: 'AdminIndex',
        components: {Top,Left},
        data() {
        return {
             list: [],
          };
        },

        mounted(){
          this.getChatListGroupByUserId();
        },

        methods: {
            async getChatListGroupByUserId(){
                this.list = await synRequestPost("/chat/adminall");
            },
            goChatIndex(id){
                this.$router.push('/admin/chat/index?id='+id);
            },
        }
    
      
    }
  </script>
    
    <style scoped>
    @import '../../../../static/bootcss/css/bootstrap.min.css'
</style>