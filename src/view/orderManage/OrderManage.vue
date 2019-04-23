<template>
  <!--订购单管理-->

<div class="order">
  <el-card>
  <!--<el-row>-->
    <!--<el-col :span="12">-->
      <router-link :to="{ name: 'addOrder'}">
        <el-button type="primary" class="el-icon-plus">新增订单</el-button>
      </router-link>

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
            itemName:'可口可乐',
            sendAddress: '重庆两江新区',
            receiveAddress: '上海市普陀区金沙江路 1518 弄',
            currentStation: '重庆中转站',
            nextStation:'上海站中转站',
            kg:'6.9'
          }],
          tableAttr: {
            index: {},
            other: [
              {name: '详情',type:'look'},
              {name: '修改',type:'edit'},
              {name: '删除',type:'del',color:'red'}
            ]
          },
          /** 表头 */
          tableHeader: [
            {prop: 'orderId', label: '订单号'},
            {prop: 'itemName', label: '物品名称',},
            {prop: 'sendAddress', label: '起点',},
            {prop: 'receiveAddress', label: '终点',},
            {prop: 'currentStation', label: '已到达',},
            {prop: 'nextStation', label: '下一站',},
            {prop: 'kg', label: '大致重量',}
          ],

          /** 默认分页器的数据 */
          page:1,
          pageSize:5,
          pageCount:100,//信息总条数

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
      mounted(){
        this.getTableData();
      },
      methods:{

        /** 表格 */
       getTableData:function(){
          orderManageApi.GetTableList({pageNum:this.page,pageSize:this.pageSize}).then(res => {
            this.tableData = res.data.data;
            this.pageCount = res.data.totalCount;
            console.log(res.data);
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
              orderManageApi.DeleteApi(row).then(res => {
                console.log(res.data.message);
                if (res.data.message === '订单删除成功') {
                  this.getTableData();
                  this.$message({
                    type: 'success',
                    message: '删除成功'
                  })
                } else {
                  this.$message({
                    type: 'success',
                    message: '删除失败'
                  })
                }
              })
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
