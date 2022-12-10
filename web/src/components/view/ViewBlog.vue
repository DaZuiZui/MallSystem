<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>

        <div class="alert alert-primary" role="alert">
            论坛信息
        </div>

        <div>
            <div class="jumbotron"   >
                <h1 class="display-4">{{obj.tiitle}}</h1>
                <p class="lead"> 
                </p>
                <hr class="my-4">
                 {{obj.context}}
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
        obj: {
            tiitle: "",
            context: "asd ",
        },
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
             
              let a  = await synRequestPost("/blog/byid?aid="+getQueryVariable("id"));
              this.obj = a[0];
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