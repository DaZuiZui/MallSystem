<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        <div>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">
                    &nbsp;
                </div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple">
                    <div>
                        <br>  <br><br>
                        <div v-for="(obj,index) in list" :key="index">
                            <div v-if="obj.type == 0">
                                    <b>我说:</b> 
                            </div>
                            <div v-else> 
                                    <b>管理员说:</b>
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
                    </div>
                </div></el-col>
 
                <el-col :span="2"><div class="grid-content bg-purple">
                    &nbsp;
                </div></el-col>
              </el-row>
        </div>
    </div>
  </template>
  
  <script>
  import Top from '../view/user/frame/Top.vue'
  import {synRequestPost} from "../../../static/request"
  export default {
    name: 'HelloWorld',
    components:{Top},
    data () {
      return {
        list: [],
        msg: 'Welcome to Your Vue.js App',
        context: "",
      }
    },
    mounted(){
        this.queryallGood();
    },
    methods: {
          /**
           *  查看所有商品信息 
           */
          async queryallGood(){
              this.list = await synRequestPost("/chat/byuserid?userid="+getCookie("id"));
              console.log(this.list);
          },

          async tosend(id){
             await synRequestPost("/chat/send?userid="+getCookie("id")+"&type=0&context="+this.context);
             alert("发送成功");
             this.queryallGood();
          }
    }
  }
  </script>
  
   

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<style scoped>
@import '../../../static/bootcss/css/bootstrap.min.css'
</style>