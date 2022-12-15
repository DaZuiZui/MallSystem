<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        我的地址
        <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="user.address">
      </el-input>
      
      我的密码
      <el-input v-model="user.password" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="submit">修改</el-button>
      
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
        msg: 'Welcome to Your Vue.js App',
        user: {
            address: "",
            password: "",
            username: "",
            id: 1,
        },
      }
    },
    mounted(){
        this.queryallGood();
    },
    methods: {
        async queryallGood(){
 
            let obj = await synRequestPost("/user/qbyid?aid="+getCookie("id") );
            this.user = obj[0];
            console.log(obj);
        },
        async submit(){
            let url = "/user/update?password="+this.user.password+"&address="+this.user.address+"&id="+this.user.id;
            await synRequestPost(url);
            alert("修改成功");
            setCookie("address",this.user.address);
            setCookie("password",this.user.password);
        },
    },
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