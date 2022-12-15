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
        <el-col style="width:33%"><div class="grid-content bg-purple">
            <div>
              <Left></Left>
            </div>
        </div></el-col>
        
        <el-col :span="14"><div class="grid-content bg-purple">
            商品信息<br>
            <el-row :gutter="20">
              <el-col :span="10"><div class="grid-content bg-purple">
                <el-input v-model="type" placeholder="请输入分类" style="width:100%" ></el-input>
              </div></el-col>

              <el-col :span="10"><div class="grid-content bg-purple">
                <el-input v-model="name" placeholder="请输入商品昵称" style="width:100%" ></el-input>
              </div></el-col>
            </el-row>
            

            <el-button type="primary" style="width:83%" @click="querybysome">查询商品</el-button>
            <br><hr>
            <el-button type="primary" @click="addGoodInfo">增加</el-button>
            <el-button type="danger" @click="deleteall">批量删除</el-button>

            <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
              <div class="hidden-columns">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="el-table__header-wrapper">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 820px;">
                  <colgroup>
                    <col name="el-table_1_column_1" width="25">
                    <col name="el-table_1_column_2" width="120">
                    <col name="el-table_1_column_2" width="100">
                    <col name="el-table_1_column_2" width="80">
                    <col name="el-table_1_column_2" width="80">
                    <col name="el-table_1_column_2" width="80">
                    <col name="el-table_1_column_3" width="80">
                    <col name="el-table_1_column_3" width="200">
                  </colgroup>
                  <thead class="">
                    <tr class="">
                      <th colspan="1" rowspan="1" class="el-table_1_column_1     is-leaf el-table__cell">
                        <div class="cell">#</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">名字</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">分类</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">图片</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">数量</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">游戏昵称</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">价格</div>
                      </th>
                      <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                        <div class="cell">操作</div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="el-table__body-wrapper is-scrolling-none">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 820px;">
                  <colgroup>
                    <col name="el-table_1_column_1" width="25">
                    <col name="el-table_1_column_2" width="120">
                    <col name="el-table_1_column_2" width="100">
                    <col name="el-table_1_column_2" width="80">
                    <col name="el-table_1_column_2" width="80">
                    <col name="el-table_1_column_2" width="80">
                    <col name="el-table_1_column_3" width="80">
                    <col name="el-table_1_column_3" width="200">
                  </colgroup>
                  <tbody>
                    <tr class="el-table__row" v-for="(obj,index) in list" :key="index">
                      <td rowspan="1" colspan="1" class="el-table_1_column_1   el-table__cell">
                        <div class="cell">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="obj.id" v-model="arr">
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell">{{obj.name}}</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell">{{obj.type}}</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell"> 
                          <div class="block" style="width:60px;height:60px">
                            <el-image :src="obj.ima_url"></el-image>
                          </div>
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell"> 
                          {{obj.numbers}}
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell"> 
                          {{obj.gamename}}
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell"> 
                         ¥{{obj.score}}
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                        <div class="cell"> 
                          <el-button type="success" @click="goupdate(obj.id)">修改</el-button>
                          <el-button type="info">删除</el-button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="el-table__column-resize-proxy" style="display: none;"></div>
            </div>

        </div></el-col>
      </el-row>  
    </div>
  </template>
    
  <script>
      import {synRequestPost} from "../../../../static/request"
      import Top from '../frame/Top.vue';
      import Left from '../frame/Left.vue'
      export default {
        name: 'AdminIndex',
        components: {Top,Left},
        data() {
        return {
                name: "",
                type: "",
                list: [],
                arr: [],
          };
        },
        mounted(){
          this.queryallGood();
        },
        methods: {
          //添加商品信息  
          addGoodInfo(){
            this.$router.push('/admin/push/good');
          },
          /**
           *  查看所有商品信息 
           */
          async queryallGood(){
              this.list = await synRequestPost("/getallgoodsinfo");
              console.log("asda");
              console.log(this.list);
          },

          async querybysome(){
  
            this.list = await synRequestPost("/querybysome?type="+this.type+"&name="+this.name);
          },
          
          /**
           *  修改页面
           */
          goupdate(id){
            this.$router.push('/admin/good/updateGoodsInfo?id='+id);
          },

          /**
           *  批量删除
           */ 
          async deleteall(){
            await synRequestPost("/admin/info/delall?arr="+this.arr);
            alert("删除成功");
            this.queryallGood();
          }
        }
  
      
    }
  </script>
    
<style scoped>
    @import '../../../../static/bootcss/css/bootstrap.min.css'
</style>