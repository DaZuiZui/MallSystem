<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>

     

        <el-row :gutter="20">
          <el-col :span="1"><div class="grid-content bg-purple">&nbsp;</div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple">
            <div v-for="(obj,index) in list" :key="index">
              <div class="card" style="width: 18rem;float:left;margin-left:110px;margin-top:30px">  
                <img :src="obj.ima_url" class="card-img-top" width="100px" height="160px">
                <div class="card-body">
                  <h5 class="card-title">{{obj.name}}</h5>
                  <p class="card-text"> 
                    <b>游戏昵称:</b>{{obj.gamename}} ,<b> 游戏分类:</b> {{obj.type}}
                    <b>价钱¥</b> {{obj.score}} <b>剩余数量：</b>{{obj.numbers}}
                  </p>
                  <a href="#" class="btn btn-primary">购买</a>
                  <button type="button" class="btn btn-success">加入购物车</button>
                </div>
              </div>
                <!--
                <div class="jumbotron"  v-if="obj.numbers > 0">
                    <h1 class="display-4">{{obj.name}}</h1>
                    <p class="lead">游戏昵称:{{obj.gamename}} , 游戏分类: {{obj.type}}
                        价钱¥ {{obj.score}} 剩余数量：{{obj.numbers}}
                    </p>
                    <hr class="my-4">
                    <p> 
                        <img width="100%" height="250px" :src="obj.ima_url" class="image">
                    </p>
                    <a class="btn btn-primary btn-lg" href="#" role="button" @click="gotobuy(obj.id)">去购买</a>
                </div>-->
            </div>


          </div></el-col>
          <el-col :span="1"><div class="grid-content bg-purple">&nbsp;</div></el-col>
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
              this.list = await synRequestPost("/getallgoodsinfo");
              console.log(this.list);
          },

          async gotobuy(id){
             await synRequestPost("/buygood?goodid="+id+"&userid="+getCookie("id"));
             alert("购买完事");
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