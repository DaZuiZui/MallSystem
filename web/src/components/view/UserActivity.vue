<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>

        <div class="alert alert-primary" role="alert">
            活动页面
          </div>
        <div v-for="(obj,index) in list" :key="index">
            <div class="jumbotron"   >
                <h1 class="display-4">{{obj.name}}</h1>
                <p class="lead"> 创建时间{{obj.create_time}}
                </p>
                <hr class="my-4">
                <p> 
                    <img width="100%" height="250px" :src="obj.ima_url" class="image">
                </p>
            </div>
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
             this.list = await synRequestPost("/getActivityAll");
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