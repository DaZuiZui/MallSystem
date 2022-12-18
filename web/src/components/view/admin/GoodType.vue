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
        <el-col  style="width:33%"><div class="grid-content bg-purple">
            <div>
              <Left></Left>
            </div>
        </div></el-col>
        
        <el-col :span="14"><div class="grid-content bg-purple">
            添加商品分类
            <el-input v-model="name" placeholder="请输入分类"></el-input>
            <el-button type="primary" style="width:100%" @click="insertType">提交分类</el-button>
            <el-button type="danger" @click="delAll">批量删除</el-button>


            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">索引</th>
                  <th scope="col">名字</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(obj,index) in list" :key="index">
                  <th scope="row">
                    &nbsp;   &nbsp;   &nbsp;
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="obj.id" v-model="arr">
                  </th>
                  <td>{{obj.id}}</td>
                  <td>{{obj.type_name}}</td>
                  <td>
                    <button type="button" class="btn btn-danger" @click="deldeteByid(obj.id)">删除</button>
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
      export default {
        name: 'AdminIndex',
        components: {Top,Left},
        data() {
        return {
                name: "",
                arr: [],
                list: [],
          };
        },
        
        mounted(){
          this.queryalltype();
        },

        methods: {
            async insertType(){
                await synRequestPost("/post/goodtype?name="+this.name);
                this.queryalltype();
                alert("插入成功");
                
            },
            async delAll(){
               await synRequestPost("/admin/type/dellAll?arr="+this.arr);
               this.queryalltype();
            },  
            
            //获取全部分类
            async queryalltype(){
              this.list = await synRequestPost("/queryalltype");
            },
            //单独删除
            async deldeteByid(id){
                await synRequestPost("/admin/goodtype/byid?aid="+id);
                this.queryalltype();
                alert("删除成功")
            }
        }
    
      
    }
  </script>

<style scoped>
@import '../../../../static/bootcss/css/bootstrap.min.css'
</style>
  

   