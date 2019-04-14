<template>
  <div >
    <div class="start">
      <el-row :gutter="25">
        <el-col :span="6" >
          <router-link :to="{ path: './plusStation'}" class="active"><el-button type="primary" class="el-icon-plus">&nbsp;增加</el-button></router-link>
        </el-col>
        <div class="left">
          <el-form :inline="true" >
            <el-col :span="25">
              <el-form-item >
                <el-input   style="width:200px" placeholder="请输入站点名称" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-input  style="width:170px"  placeholder="请输入站点负责人" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"   icon="el-icon-search">搜索</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </div>
      </el-row>
    </div>
    <comp-table
      v-loading="loading"
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
import {NewApi} from './Api'
import compTable from './table'
import compPagination from '../../packages/components/pagination/index'
import {Msg} from '../../tools/message'
export default {
  data () {
    return {
      page: '',
      pageSize: '',
      note: {
        height: '700px',
        width: '100%'
      },
      tableHeader: [
        {prop: 'distributionId', label: '站点编号'},
        {prop: 'stationName', label: '站点名称'},
        {prop: 'manager', label: '负责人'},
        {prop: 'address', label: '地址'},
        {prop: 'carName', label: '配送车辆'}
      ],
      tableData: [],
      tableAttr: {
        noIndex: false,
        other: [
          {name: '查看', type: 'look', color: 'orange'},
          {name: '删除', type: 'del', color: 'red'},
          {name: '编辑', type: 'edit', color: 'orange'}
        ]
      }
    }
  },
  components: {
    compTable,
    compPagination
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    open2 () {
      this.$confirm('此操作将永久删除站点, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var param = {id: 1}
        NewApi.DeletedStationApi(param).then(res => {
          if (res.status === '200') {
            this.getTableData()
            Msg.success('删除成功')
          } else {
            Msg.error('删除失败')
          }
        })
      }).catch(() => {
      })
    },
    getTableData () {
      this.tableData = [{distributionId: 'cc', stationName: 'kkk', manager: '0pp'}]
    },
    tableOtherClick (row, type, index) {
      if (type === 'edit') {
        this.$router.push({name: '站点编辑'})
      }
      if (type === 'look') {
        this.$router.push({name: '站点详情'})
      }
      if (type === 'del') {
        this.open2(index)
      }
    },
    /** 改变每页显示数量 */
    handleSizeChange: function (val) {
      this.pageSize = val
      // 获取数据
    },
    /** 改变页码 */
    handleCurrentChange: function (val) {
      this.page = val
      // 获取数据
    }
  }

}
</script>

<style scoped>
  .start{
    float:right;
    width:100%;
    margin-bottom: 1px;
    /*background: #f4f9ff;*/
  }
  .left{
    float:right;
  }
  .active{
    text-decoration: none;
  }
</style>
