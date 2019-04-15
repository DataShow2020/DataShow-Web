<template>
  <!--订购单管理-->

<div class="order">
  <el-card>
  <el-row>
    <el-col :span="12">
      <router-link :to="{ name: 'addOrder'}">
        <el-button type="primary" class="el-icon-plus" style="margin: 10px;">新增订单</el-button>
      </router-link>
    </el-col>
  <!--<el-button @click="add('新增')" type="primary" style="margin: 20px;">新增</el-button>-->
  <!--搜索-->
    <el-col :span="12">
    <div class="top">

        <el-form :model="selectForm">
          <el-col :span="12">
            <el-form-item
              prop="orderId"
              >
              <el-input v-model="selectForm.orderId" style="width: 200px;" placeholder="请输入订单号"></el-input>
            </el-form-item>

            <!--<el-form-item prop="receiveAddress" label="收件地址" :label-width="formLabelWidth">-->
              <!--<el-input v-model="form.receiveAddress" class="myInput" placeholder="省/市/区/详细地址"></el-input>-->
            <!--</el-form-item>-->
          </el-col>
        </el-form>

      <el-button type="primary" @click="getTableData(selectForm)">搜 索</el-button>
    </div>

  </el-col>
  </el-row>

  <comp-table
    :tableData="tableData"
    :tableHeader="tableHeader"
    :tableAttr="tableAttr"
    className="tableClassName"
    @tableOtherClick="tableOtherClick"
  >
  </comp-table>

  <comp-pagination
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
    :page="page"
    :pageSize="pageSize"
    :totalCount="pageCount"
  >
  </comp-pagination>

  </el-card>
</div>

</template>

<script>
  // import myForm from './form'
  import {orderManageApi} from './api'
  import compTable from '../../packages/components/table/index'
  import myForm from '../../packages/components/form/index'
  import compPagination from '../../packages/components/pagination/index'
  // import compQ
    export default {
      name: "orderManage",
      data() {
        return {
          /** 表格的数据 */
          tableData: [{
            orderId: '20160502',
            productName:'可口可乐',
            startDistribution: '重庆两江新区',
            endDistribution: '上海市普陀区金沙江路 1518 弄',
            currentStation: '重庆中转站',
            nextStation:'上海站中转站',
            kg:'6.9'
          }],
          tableAttr: {
            index: {},
            other: [
              {name: '查看',type:'look'},
              {name: '编辑',type:'edit'},
              {name: '删除',type:'del'}
            ]
          },
          /** 表头 */
          tableHeader: [
            {prop: 'orderId', label: '订单号'},
            {prop: 'productName', label: '物品名称',},
            {prop: 'startDistribution', label: '起点',},
            {prop: 'endDistribution', label: '终点',},
            {prop: 'currentStation', label: '已到达',},
            {prop: 'nextStation', label: '下一站',},
            {prop: 'kg', label: '大致重量',}
          ],

          /** 默认分页器的数据 */
          page:1,
          pageSize:5,
          pageCount:100,

          /*搜索*/
          selectForm:{
            orderId:'',
          }
        }
      },
      components:{
        compTable,
        compPagination
      },
      methods:{
        /** 新增订单 */
        add: function(option){
          console.log(option);
          this.dialogTitle=option;
          this.dialogFormVisible=true;
        },
        /** 搜索表格 */
       getTableData:function(){
          orderManageApi.GetTableList({orderId: this.orderId}).then(res => {
            this.tableData = res.data.data;
          });
        },
        /** 其他操作 */
        tableOtherClick(row,type,index) {
          // console.log(row);
          // console.log(type);
          // console.log(index);
          if(type==='edit'){
            this.goEdit(row);
          }else if(type==='look'){
            this.goLook(row);
          }else if(type==='del'){
            this.$confirm('此操作将永久删除该资源, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              // this.deleteResource()
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            })
          }
        },
        goLook:function(item){
          console.log(item);
          this.$router.push({
            name: 'lookOrder',
            query: {
              rowList: item
            }
          })
        },
        /**跳转编辑页面*/
        goEdit:function(item){
          console.log(item);
          this.$router.push({
            name: 'editOrder',
            query: {
              rowList: item
            }
          })
        },
        /** 改变每页显示数量 */
        handleSizeChange: function (val) {
          this.pageSize = val;
          // 获取数据
        },
        /** 改变页码 */
        handleCurrentChange: function (val) {
          this.page = val;
          // 获取数据
        },
      }
    }
</script>

<style scoped>
.top{
  float:right;
  margin: 10px;
  width: 80%;
}

</style>
