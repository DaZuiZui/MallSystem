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
        <el-col style="width:33%"><div class="grid-content bg-purple">
            <div>
              <Left></Left>
            </div>
        </div></el-col>
        
        <el-col :span="14"><div class="grid-content bg-purple">
            <br>
            活动公告
            <br><hr>
            <el-button type="primary" @click="addGoodInfo">增加</el-button>
            <el-button type="danger" @click="deleteall">批量删除</el-button>
            
            <br>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">标题</th>
                    <th scope="col">图片</th>
                    <th scope="col">发布时间</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(obj,index) in list" :key="index">
                    <th scope="row">
                        &nbsp; &nbsp; &nbsp; 
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="obj.id"  v-model="arr">
                    </th>
                    <td>{{obj.name}}</td>

                    <td>
                        <div class="block" style="width:60px;height:60px">
                            <el-image :src="obj.ima_url"></el-image>
                          </div>
                    </td>

                    <td> 
                        {{obj.create_time}}
                    </td>
                    <td>
                        <button type="button" class="btn btn-success" @click="goupdate(obj.id)">修改</button>
                        <button type="button" class="btn btn-danger" @click="delById(obj.id)">删除</button>
                    </td>
                  </tr>
           
                 
                </tbody>
              </table>

        </div></el-col>
      </el-row>  
    </div>
  </template>
    
  <script>
      import {synRequestPost} from "../../../../static/request"
      import Top from '../frame/Top.vue';
      import Left from '../frame/Left.vue'
import { async } from "q";
      export default {
        name: 'AdminIndex',
        components: {Top,Left},
        data() {
        return {
                name: "",
                type: "",
                list: [],
                arr: [],
          };
        },
        mounted(){
          this.queryallGood();
        },
        methods: {
          //添加商品信息  
          addGoodInfo(){
            this.$router.push('/admin/addactivity');
          },
      
          /**
           *  查看所有商品信息 
           */
          async queryallGood(){
              this.list = await synRequestPost("/getActivityAll");
 
          },

          async querybysome(){
            this.list = await synRequestPost("/querybysome?type="+this.type+"&name="+this.name);
          },
          
          /**
           *  修改页面
           */
          goupdate(id){
      
            this.$router.push('/admin/UpdateActivity?id='+id);
          },

          /**
           *  批量删除
           */ 
          async deleteall(){
            await synRequestPost("/admin/activity/delall?arr="+this.arr);
            alert("删除成功");
            this.queryallGood();
          },
          async delById(id){
            await synRequestPost("/admin/activity/byid?aid="+id);
            alert("删除成功");
            this.queryallGood();
          }
        }
  
      
    }
  </script>
    
<style scoped>
    @import '../../../../static/bootcss/css/bootstrap.min.css'
</style>