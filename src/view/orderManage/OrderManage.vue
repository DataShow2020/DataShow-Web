<template>
  <!--订购单管理-->
<div class="order">
  <router-link :to="{ path: '/addOrder'}">
    <el-button type="primary" class="el-icon-plus" style="margin: 20px;">新增订单</el-button>
  </router-link>

  <!--<el-button @click="add('新增')" type="primary" style="margin: 20px;">新增</el-button>-->
  <!--搜索-->



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


</div>

</template>

<script>
  // import myForm from './form'
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
            noIndex: true,
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
          pageCount:100
        }
      },
      components:{
        compTable,
        compPagination
      },
      methods:{
        add: function(option){
          console.log(option);
          this.dialogTitle=option;
          this.dialogFormVisible=true;
        },
        tableOtherClick(row,type,index) {
          console.log(row);
          console.log(index);
          console.log(type);
          if(type==='edit'){
            this.dialogTitle='编辑';
            this.dialogFormVisible=true;
          }
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


</style>
