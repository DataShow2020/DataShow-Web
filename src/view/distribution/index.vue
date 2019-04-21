<template>
  <div >
    <el-card>
    <div class="start">
      <el-row :gutter="25">
        <el-col :span="6" >
          <router-link :to="{ path: './plusDistribution'}" class="active"><el-button type="primary" class="el-icon-plus">&nbsp;增加</el-button></router-link>
        </el-col>
        <div class="left">
          <el-form :inline="true" >
            <el-col :span="25">
              <el-form-item >
                <el-select v-model="status" placeholder="请选择当前配送点状态"  id="select" clearable>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"   icon="el-icon-search" @click="getTableData()">搜索</el-button>
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
      :totalCount="totalCount"
    >
    </comp-pagination>
    </el-card>
  </div>
</template>

<script>
import {NewApi} from './Api'
import CompTable from './table'
import compPagination from '../../packages/components/pagination/index'
import {Msg} from '../../tools/message'
export default {
  data () {
    return {
      /** 分页信息 */
      page: 1,
      /** 每页数量  默认5 */
      pageSize: 5,
      /** 总数  需要动态获取 */
      totalCount: 20,
      status: '',
      loading: false,
      options: [{
        value: '0',
        label: '正常'
      }, {
        value: '1',
        label: '废弃'
      }],
      note: {
        height: '700px',
        width: '100%'
      },
      tableHeader: [
        {prop: 'distributionNumber', label: '配送点编号'},
        {prop: 'distributionName', label: '配送点名称'},
        {prop: 'userName', label: '负责人'},
        {prop: 'address', label: '地址'},
        {prop: 'createdUnit', label: '创建单位'}
      ],
      tableData: [],
      tableAttr: {
        noIndex: false,
        other: [
          {name: '查看', type: 'look', color: 'orange'},
          {name: '删除', type: 'del', color: 'red'},
          {name: '编辑', type: 'edit', color: 'orange'}
        ],
        status: {}
      }
    }
  },
  components: {
    CompTable,
    compPagination
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    open2 (index) {
      this.$confirm('此操作将永久删除配送点, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        NewApi.DeletedDistributionApi({distributionId: index}).then(res => {
          this.getTableData();
          Msg.success('删除成功')
        })
      }).catch(() => {
      })
    },
    getTableData () {
      this.loading = true;
      this.data = {
        page: this.page,
        pageSize: this.pageSize,
        status: this.status
      };
      console.log(this.data);
      NewApi.GetDistributionApi(this.data).then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data;
        this.loading = false;
        this.totalCount = res.data.totalCount;
        console.log(this.tableData)
      })
    },
    tableOtherClick (row, type, index) {
      if (type === 'edit') {
        NewApi.GetDistributionItemApi({id: row.distributionId}).then(res => {
          this.$router.push({name: '配送点编辑', params: res.data.data})
        })
      }
      if (type === 'look') {
        let detail = this.tableData[index]
        this.$router.push({name: '配送点详情', params: detail})
      }
      if (type === 'del') {
        this.open2(row.distributionId)
      }
    },
    /** 改变每页显示数量 */
    handleSizeChange: function (val) {
      this.pageSize = val;
      this.getTableData()
      // 获取数据
    },
    /** 改变页码 */
    handleCurrentChange: function (val) {
      this.page = val;
      this.getTableData()
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
