<template>
<div>

  <el-card style="margin:20px;">
    <el-row :gutter="25">
      <el-col :span="6">
        <router-link :to="{ name: 'addEmployee'}">
          <el-button type="primary" class="el-icon-plus">新增员工</el-button>
        </router-link>
      </el-col>
      <div class="top">
        <el-form :inline="true" >
          <el-col :span="25">
            <el-form-item>
              <el-select v-model="workStationId" placeholder="请选择员工工作站点"  id="select" clearable>
                <el-option
                  v-for="item in optionsStation"
                  :key="item.value"
                  :label="item.stationName"
                  :value="item.stationId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="workDistributionId" placeholder="请选择员工工作配送点"  id="select" clearable>
                <el-option
                  v-for="item in optionsDistribution"
                  :key="item.value"
                  :label="item.distributionName"
                  :value="item.distributionId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getTableData()">搜索</el-button>
            </el-form-item>
          </el-col>

        </el-form>
      </div>
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
  import compTable from '../../packages/components/table/index'
  import compPagination from '../../packages/components/pagination/index'
  import {EmployeeApi} from './api'
    export default {
        name: "index",

      data(){
          return{
            /** 分页信息 */
            page: 1,
            /** 每页数量  默认5 */
            pageSize: 5,
            /** 总数  需要动态获取 */
            pageCount: 200,

            /** 表格 */
            tableAttr: {
              index: {},
              other: [
                {name: '查看',type:'look'},
                {name: '修改',type:'edit'},
                {name: '删除',type:'del',color:'red'}
              ]
            },
            tableHeader:[
              {prop:'employeeId',label:'员工号'},
              {prop:'employeeName',label:'姓名'},
              // {prop:'sex',label:'性别'},
              {prop:'phone',label:'电话'},
              {prop:'stationName',label:'工作站点'},
              {prop:'distributionName',label:'工作配送点'},
              // {prop:'workStart',label:'入职日期'},
              // {prop:'address',label:'家庭住址'}
            ],
            tableData: [],
            optionsStation:[],
            workStationId:'',
            optionsDistribution:[],
            workDistributionId:'',


          }
      },
      mounted(){
        this.getTableData();
        this.getDistributions();
        this.getStations();
      },
      components:{
        compTable,
        compPagination
      },
      methods:{
        /** 表格 */
        getTableData:function(){
          EmployeeApi.GetTableList({page:this.page,pageSize:this.pageSize,stationId:this.workStationId,distributionId:this.workDistributionId}).then(res => {
            this.tableData = res.data.data;
            this.pageCount = res.data.totalCount;
            console.log(res.data);
          });
        },
          /** 改变每页显示数量 */
          handleSizeChange: function (val) {
            this.pageSize = val;
            this.getTableData();
          },
          /** 改变页码 */
          handleCurrentChange: function (val) {
            this.page = val;
            this.getTableData();
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
                EmployeeApi.DeleteApi(row).then(res => {
                  console.log(res.data.message);
                  if (res.data.message === '员工删除成功') {
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
          /**跳转编辑页面*/
          goEdit:function(item){
            console.log(item);
            this.$router.push({
              name: 'editEmployee',
              query: {
                rowList: item
              }
            })
          },
        goLook:function(item){
          console.log(item);
          this.$router.push({
            name: 'lookEmployee',
            query: {
              rowList: item
            }
          })
        },
        /*获取所有的配送点*/
        getDistributions() {
          EmployeeApi.getDistributions().then(res => {
            this.optionsDistribution = res.data.data;
            console.log("========distributions=========");
            console.log(this.optionsDistribution);
          })
        },
        /*获取所有的站点*/
        getStations() {
          EmployeeApi.getStations().then(res => {
            this.optionsStation = res.data.data;
            console.log("========stations=========");
            console.log(this.optionsStation);
          })
        }
      }

    }
</script>

<style scoped>
.top{
  float: right;
}
</style>
