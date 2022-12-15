<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        <br>
        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            <el-col :span="20"><div class="grid-content bg-purple">
                <div class="jumbotron"  >
                    <h1 class="display-4">{{obj.name}}</h1>
                    <p class="lead">游戏昵称:{{obj.gamename}} , 游戏分类: {{obj.type}}
                        价钱¥ {{obj.score}} 剩余数量：{{obj.numbers}}
                    </p>
                    <hr class="my-4">
                    <p> 
                        <img width="100%" height="250px" :src="obj.ima_url" class="image">
                    </p>
                    <button type="button" class="btn btn-primary" @click="GoBuy(obj.id)">结账</button>
                    <button type="button" class="btn btn-success">加入购物车</button>
                </div>

            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
          </el-row>
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
        obj: null,
        msg: 'Welcome to Your Vue.js App'
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
              let o = await synRequestPost("/admin/goods/querybyid?id="+getQueryVariable("id"));
              this.obj = o[0];
              console.log(this.obj);
          },

          async gotobuy(id){
             await synRequestPost("/buygood?goodid="+id+"&userid="+getCookie("id"));
             alert("购买完事"); 
             this.queryallGood();
          },

          /**
           *   清算结算
           */ 
          async GoBuy(id){
            window.location.href="http://127.0.0.1:8080/shop/gobuy?id="+getQueryVariable("id");
          },
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