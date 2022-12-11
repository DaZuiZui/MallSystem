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
            <br>   
            <div class="alert alert-primary" role="alert">
               添加轮播图图片
              </div>
           <br>

          <br>
          介绍图片:
          <el-upload
          class="upload-demo"
          drag
          name="files"
          action="http://127.0.0.1:3000/uploadPicForAgency"
          :on-success="fileOK"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将介绍图片拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip"> </div>
        </el-upload>

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
               await synRequestPost("/admin/carsosel/add?ima_url="+this.filename);
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