<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        <br>
        <el-row :gutter="20">
            <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            <el-col :span="20"><div class="grid-content bg-purple">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">商品图片</th>
                        <th scope="col">昵称</th>
                        <th scope="col">收货地址</th>
                        <th scope="col">价钱</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <el-image :src="obj.ima_url" style="width:200px;height:100px"></el-image>  
                        </td>
                        <td>
                            
                            {{obj.name}}
                        </td>
                        <td>{{address}}</td>
                        <td>$ {{obj.score}}</td>
                      </tr>
                    </tbody>
                  </table>

                <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                    扫码付款
                </el-button>
                <el-button @click="gotobuy(obj.id)">我已完成支付</el-button>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
          </el-row>
      

          <el-drawer
            title="请使用微信或者支付宝扫码支付"
            :visible.sync="drawer"
            :direction="direction"
            size="75%"
            :before-close="handleClose">
            <span>
                <el-row :gutter="20">
                    <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple">
                        <div style="float:left;margin-left:400px">
                            <div class="block">
                                <span class="demonstration">   </span>
                                <el-image src="https://img1.baidu.com/it/u=3022699208,44753034&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" style="width:400px;height:400px">
                                  <div slot="placeholder" class="image-slot"  >
                                    加载中<span class="dot">...</span>
                                  </div>
                                </el-image>
                              </div>
                        </div>
                       
                    </div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                  </el-row>
            </span>
        </el-drawer>

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
        msg: 'Welcome to Your Vue.js App',
        address: '',
        drawer: false,
        direction: 'btt',
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    },
    mounted(){
        this.queryallGood();
        this.gc();
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

          async gc(){
            this.address = getCookie("address");
          },

          /**
           *  
           */
          handleClose(done) {
                this.$confirm('确定是否已经确认付款?')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
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