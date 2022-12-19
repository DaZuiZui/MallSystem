<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        <el-carousel :interval="4000" type="card" height="300px"  width="100%" >
            <el-carousel-item v-for="item in list" :key="item.id"   >
              <img width="100%" :src="item.ima_url" class="image">
            </el-carousel-item>
          </el-carousel>

          <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              精品商品推荐：
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
          </el-row>

        <div v-for="(obj,index) in list" :key="index">
          <div class="card" style="width: 18rem;float:left;margin-left:110px;margin-top:30px" v-if="obj.numbers > 0">  
            <img :src="obj.ima_url" class="card-img-top" width="100px" height="160px">
            <div class="card-body">
              <h5 class="card-title">{{obj.name}}</h5>
              <p class="card-text"> 
                 详细请点击商品列表进行查看
              </p>

            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import Top from '../view/user/frame/Top.vue';
  import {synRequestPost} from "../../../static/request"
  export default {
    name: 'HelloWorld',
    components:{Top},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list: [],
      }
    },
    mounted(){
        this.getAll();
        this.queryallGood();
    },
    methods: {
        async getAll(){
           this.list =  await synRequestPost('/carousel/all');
        },
        /**
         *  查看所有商品信息 
         */
        async queryallGood(){
          this.list = await synRequestPost("/admin/limitgood?start=0&end1=3");
          console.log(this.list);
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