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
            <div v-for="(obj,index) in list" :key="index">
                <div v-if="obj.type == 0">
                    <b>用户说说:</b> 
                </div>
                <div v-else> 
                        <b>我说:</b>
                </div>
                
                <div style="font-size:14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    {{obj.context}}
                </div> 
            </div>

            <el-input
                type="textarea"
                autosize
                placeholder="请输入信息"
                v-model="context">
            </el-input>
            <el-button type="primary" style="width:100%" @click="tosend">发送</el-button>
           
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
            context: "",
          };
        },
        mounted(){
          this.view();
        },
        methods: {
            async view(){
                this.list = await synRequestPost("/chat/byuserid?userid="+getQueryVariable("id"));
            },
            async tosend(id){
             await synRequestPost("/chat/send?userid="+getQueryVariable("id")+"&type=1&context="+this.context);
             alert("发送成功");
             this.view();
          }
        }
    
      
    }
  </script>
    
   