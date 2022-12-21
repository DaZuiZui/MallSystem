<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>

        

        <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>    <th scope="col"></th>    <th scope="col"></th>
                <th scope="col">标题</th>
                <th scope="col">内容</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(obj,index) in list" :key="index">
                <td>
                     
               </td>    <td>
                     
               </td>
               <td>
                     
               </td>
                <td>{{obj.tiitle}}</td>

                <td>
                     .......
                </td>

   
                <td>
                    <button type="button" class="btn btn-success" @click="goupdate(obj.id)">查看详细</button>
                     
                </td>
              </tr>
       
             
            </tbody>
          </table>
        
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
              this.list = await synRequestPost("/blog/all");
              console.log(this.list);
          },

          async gotobuy(id){
             await synRequestPost("/buygood?goodid="+id+"&userid="+getCookie("id"));
             alert("购买完事");
             this.queryallGood();
          },

          goupdate(id){
            window.location.href="http://127.0.0.1:8080/user/blog/view?id="+id;
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