<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        <br>
        <el-row>
            <el-button type="primary" @click="sall()">查询已下单订单</el-button>
            <el-button type="success" @click="queryallGood(1)">查询已退款订单</el-button>
            <el-button type="info" @click="queryallGood(2)">查看已取消的订单</el-button>
            <el-button type="warning" @click="queryallGood(3)">查看已经完成的订单</el-button>
            <el-button type="danger" @click="queryallGood(4)">查看已经发货的订单</el-button>
          </el-row>

          <br>
          <table class="table">
            <thead>
              <tr>
                 <th scope="col">#</th>
                <th scope="col">商品唯一标识</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody> 
              <tr v-for="(obj,index) in list" :key="index">
                  
                <th scope="row"></th>
                <td>{{obj.name}}</td>
                <td>
                    <el-button type="info"  @click="updateDate(obj.id,1)">退款订单</el-button>
                    <el-button type="info"  @click="updateDate(obj.id,2)">取消订单</el-button>
                    <el-button type="info"  @click="updateDate(obj.id,3)">完成订单</el-button>
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
        this.sall();
    },
    methods: {
          /**
           *  查看所有商品信息 
           */
          async queryallGood(status){
              this.list = await synRequestPost("/user/dingdan?userid="+getCookie("id")+"&status="+status);
              console.log(this.list);
          },

          async gotobuy(id){
             await synRequestPost("/buygood?goodid="+id+"&userid="+getCookie("id"));
             alert("购买完事");
             this.queryallGood();
          },

          /**
           * 更改数据   
           */
          async updateDate(id,status){
            await synRequestPost("/admin/updatelistonthis?aid="+id+"&status="+status);
            alert("操作成功");
            this.queryallGood();
          },

          async sall(){
           this.list =  await synRequestPost("/listall?aid="+getCookie("id"));
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