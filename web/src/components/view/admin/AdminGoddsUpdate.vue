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
                商品详细页面，若你需要修改
            </div>
           <br>
           编号 <el-input v-model="user.goodid" placeholder="请输入内容"></el-input>
           <br>
           <div class="form-group">
            <label for="exampleFormControlSelect1">分类</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model="user.type" >
              <option value=""  disabled>--请选择--</option>
              <option v-for="(obj,index) in list" :key="index" :value="obj.type_name">{{obj.type_name}}</option>
            </select>
          </div>

           游戏昵称 <el-input v-model="user.gamename" placeholder="请输入内容"></el-input>
           数量 <el-input v-model="user.numbers" placeholder="请输入内容"></el-input>
           价格 <el-input v-model="user.score" placeholder="请输入内容"></el-input>
           商品昵称 <el-input v-model="user.name" placeholder="请输入内容"></el-input>
           简介 
           <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">请输入简介</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" v-model="user.goodintroduction"></textarea>
          </div>

          <br>
          当前产品的展示图片
          <div class="block" >
            <el-image :src="user.ima_url" style="width:360px;height:100px"></el-image>

            <el-upload
            class="upload-demo"
            drag
            name="files"
            action="http://127.0.0.1:3000/uploadPicForAgency"
            :on-success="fileOK"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">若您想要更新图片<em>点击我</em></div>
            <div class="el-upload__tip" slot="tip"> </div>
          </el-upload>
          </div>
       
     

        <el-button type="primary" style="width:100%" @click="submit">更新</el-button>
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
            user: {
                filename: "",
                    goodid: "",
                    numbers: 0,
                    score: 100,//默money
                    gamename: "",
                    list: [],
                    type: "",
                    goodintroduction: "",
                    name: "",
            },
            list: [],
          
          };
        },

                
        mounted(){
          this.queryalltype();
        },
  
        methods: {
            //上传成公
            fileOK(response, file, fileList){
                this.user.ima_url = "http://localhost:3000/download?file_name="+response;
            },
             //获取全部分类
            async queryalltype(){
          
              this.list = await synRequestPost("/queryalltype");
              console.log("??");
        
               
              let obj1 = await synRequestPost("/admin/goods/querybyid?id="+getQueryVariable("id"));
              this.user = obj1[0];
              console.log(this.user);
            },

            async submit(){
                let str = "/admin/goods/update?ima_url="+this.user.ima_url+"&score="+this.user.score+"&";
                str+="gamename="+this.user.gamename+"&numbers="+this.user.numbers+"&type="+this.user.type;
                str+="&goodintroduction="+this.user.goodintroduction+"&goodid="+this.user.goodid+"&name="+this.user.name
                str+="&gid="+getQueryVariable("id");
                await synRequestPost(str);
                alert("修改成功");
            },
        }
    }
  </script>
    
 <style scoped>
    @import '../../../../static/bootcss/css/bootstrap.min.css'
</style>