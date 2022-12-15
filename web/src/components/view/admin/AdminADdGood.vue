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
            <br>   
            <div class="alert alert-primary" role="alert">
                请输入一下内容，若不输入则为默认值录入 
              </div>
           <br>
           编号 <el-input v-model="goodid" placeholder="请输入内容"></el-input>
           <br>
           <div class="form-group">
            <label for="exampleFormControlSelect1">分类</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model="type" >
              <option value=""  disabled>--请选择--</option>
              <option v-for="(obj,index) in list" :key="index" :value="obj.type_name">{{obj.type_name}}</option>
            </select>
          </div>

           游戏昵称 <el-input v-model="gamename" placeholder="请输入内容"></el-input>
           数量 <el-input v-model="numbers" placeholder="请输入内容"></el-input>
           价格 <el-input v-model="score" placeholder="请输入内容"></el-input>
           商品昵称 <el-input v-model="name" placeholder="请输入内容"></el-input>
           简介 
           <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">请输入简介</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" v-model="goodintroduction"></textarea>
          </div>

          <br>

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
            goodid: "",
            numbers: 0,
            score: 100,//默money
            gamename: "",
            list: [],
            type: "",
            goodintroduction: "",
            name: "",
          };
        },

                
        mounted(){
          this.queryalltype();
        },
  
        methods: {
            //上传成公
            fileOK(response, file, fileList){
                this.filename = "http://localhost:3000/download?file_name="+response;
            },
             //获取全部分类
            async queryalltype(){
              this.list = await synRequestPost("/queryalltype");
            },
            async submit(){
                let str = "/add/goodinfo?ima_url="+this.filename+"&score="+this.score+"&";
                str+="gamename="+this.gamename+"&numbers="+this.numbers+"&type="+this.type;
                str+="&goodintroduction="+this.goodintroduction+"&goodid="+this.goodid+"&name="+this.name;
                await synRequestPost(str);
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