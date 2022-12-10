<template>
    <div class="hello">
        <div>
            <Top></Top>
        </div>
        <el-carousel :interval="4000" type="card" height="300px"  width="100%" >
            <el-carousel-item v-for="item in 4" :key="item.id"   >
              <img width="100%" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" class="image">
            </el-carousel-item>
          </el-carousel>
 
    </div>
  </template>
  
  <script>
  import Top from '../view/user/frame/Top.vue'
  export default {
    name: 'HelloWorld',
    components:{Top},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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