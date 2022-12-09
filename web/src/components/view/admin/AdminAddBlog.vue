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
        <el-col :span="7"><div class="grid-content bg-purple">
            <div>
              <Left></Left>
            </div>
        </div></el-col>
 
        <el-col :span="14"><div class="grid-content bg-purple">
            <br>   
            <div class="alert alert-primary" role="alert">
                请输入一下内容，若不输入则为默认值录入 
              </div>
           <br>
           标题 <el-input v-model="title" placeholder="请输入内容"></el-input>
           <br>
           请输入内容
           <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">请输入内容</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" v-model="context"></textarea>
          </div>
          <br>
 

        <el-button type="primary" style="width:100%" @click="submit">提交</el-button>
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
            filename: "",
            create_time: new Date(),
            name: "",
            title: "",
            context: "",
          };
        },

                
        mounted(){
       
        },
  
        methods: {
            //上传成公
            fileOK(response, file, fileList){
                this.filename = "http://localhost:3000/download?file_name="+response;
            },
         
            async submit(){
               await synRequestPost("/blog/add?aid="+getCookie("id")+"&title="+this.title+"&context="+this.context+"&create_time="+this.create_time);
               alert("添加成功");
            },

            goupdate(){
              
            }
            
        }
    
      
    }
  </script>
    
    <style scoped>
    @import '../../../../static/bootcss/css/bootstrap.min.css'
</style>