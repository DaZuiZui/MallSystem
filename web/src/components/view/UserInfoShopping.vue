<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>

     

        <el-row :gutter="20">
          <el-col :span="1"><div class="grid-content bg-purple">&nbsp;</div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple">
            <br>
            <div class="input-group mb-3" style="margin-left:110px;width:90%">
              <input type="text" v-model="context " class="form-control" placeholder="请输入商品信息进行查询" aria-label="请输入商品信息进行查询" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="likeseach">查询</button>
              </div>
            </div>

            <div v-for="(obj,index) in list" :key="index">
              <div class="card" style="width: 18rem;float:left;margin-left:110px;margin-top:30px" v-if="obj.numbers > 0">  
                <img :src="obj.ima_url" class="card-img-top" width="100px" height="160px">
                <div class="card-body">
                  <h5 class="card-title">{{obj.name}}</h5>
                  <p class="card-text"> 
                    <b>游戏昵称:</b>{{obj.gamename}} ,<b> 游戏分类:</b> {{obj.type}}
                    <b>价钱¥</b> {{obj.score}} <b>剩余数量：</b>{{obj.numbers}}
                  </p>
                  <a href="#" class="btn btn-primary" @click="goviewbuy(obj.id)">购买</a>
                  <button type="button" class="btn btn-success" @click="toShopCar(obj.id)">加入购物车</button>
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
              this.list = await synRequestPost("/getallgoodsinfo");
              console.log(this.list);
          },

          async gotobuy(id){
             await synRequestPost("/buygood?goodid="+id+"&userid="+getCookie("id"));
             alert("购买完事");
             this.queryallGood();
          },

          /**
           *  添加购物车
           */
          async toShopCar(good_id){
            await synRequestPost("/shopcar/add?good_id="+good_id+"&userid="+getCookie("id"));
            alert("添加成功购物车");
          },

          /**
           *  模糊插叙
           */ 
          async likeseach(){
            this.list = await synRequestPost("/shop/likeseach?contexr="+this.context);
          },
           /**
           *  前方登入页面
           */
          goviewbuy(id){
            window.location.href="http://127.0.0.1:8080/shop/view?id="+id;
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