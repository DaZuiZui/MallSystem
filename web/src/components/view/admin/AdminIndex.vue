<template>
  <div class="AdminIndex">
    <!--头部-->
    <el-row>
      <el-col><div class="grid-content bg-purple">
        <div>
            <Top></Top>
        </div>
        </div>
      </el-col>
    </el-row>
    <!--Body-->
    <el-row :gutter="20">
      <!--left body-->
      <el-col :span="12"><div class="grid-content bg-purple">
          <Left></Left>
      </div></el-col>
      
      
      <el-col :span="12"><div class="grid-content bg-purple">
          asd

      </div></el-col>
    </el-row>  
  </div>
</template>
  
<script>
    import Top from '../frame/Top.vue';
    import Left from '../frame/Left.vue'
    export default {
      name: 'AdminIndex',
      components: {Top,Left},
      data() {
      return {
      
        };
      },

      methods: {
  
      }
  
    
  }
</script>
  
   