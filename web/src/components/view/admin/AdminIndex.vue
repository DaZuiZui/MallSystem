<template>
  <div class="AdminIndex">
    <!--头部-->
    <el-row>
      <el-col style="background-color: rgb(84, 80, 100);"><div class="grid-content bg-purple">
        <div>
            <p style="font-size:24px">Logo</p>
        </div>
        </div>
      </el-col>
    </el-row>
    <!--Body-->
    <el-row :gutter="20">
      <!--left body-->
      <el-col :span="10"><div class="grid-content bg-purple">
          <div>
            <Left></Left>
          </div>
        
      </div></el-col>
      
      <el-col :span="10"><div class="grid-content bg-purple">
          主页
      </div></el-col>
    </el-row>  
  </div>
</template>
  
<script>
    import Top from '../frame/Top.vue';
    import Left from '../frame/Left.vue'
    import {synRequestPost} from "../../../../static/request"
    export default {
      name: 'AdminIndex',
      components: {Top,Left},
      data() {
        return {
          list: [],
        };
      },

      methods: {
 
      }
  
    
  }
</script>
  
 