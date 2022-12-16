<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        
        <div>
             <br>
            <el-row :gutter="20">
                <el-col :span="1"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                <el-col :span="20"><div class="grid-content bg-purple">
                    <div class="alert alert-success" role="alert">
                    购物车列表
                      </div>
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">商品昵称</th>
                            <th scope="col">商品图片</th>
                            <th scope="col">价钱</th>
                            <th scope="col">类别</th>
                            <th scope="col">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(obj,index) in list" :key="index">
                            <th scope="row">{{index+1}}</th>
                            <td>{{obj.name}}</td>
                            <td>
                                <div class="block" style="width:100px;height:100px">
                                    <el-image :src="obj.ima_url"></el-image>
                                  </div>
                            </td>
                            <td>{{obj.score}}</td>
                            <td>{{obj.type}}</td>
                            <td>
                                <button type="button" class="btn btn-primary" @click="gotobuy(obj.goodid,obj.carid)">下单</button>
                                <button type="button" class="btn btn-primary" @click="remove(obj.carid)">移除</button>
                            </td>
                          </tr>
                         
                        </tbody>
                      </table>
                </div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple">&nbsp;</div></el-col>
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
              this.list = await synRequestPost("/shopcar/list?userid="+getCookie("id"));
              console.log(this.list);
          },

          async gotobuy(id,cid){
             await synRequestPost("/buygood?goodid="+id+"&userid="+getCookie("id"));
             //删除
             this.remove(cid);
             alert("购买完事");
             this.queryallGood();
          },

    

          /**
           * 移除
           */
          async remove(id){
            await synRequestPost("/remove/goodsInShopCar?aid="+id);
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