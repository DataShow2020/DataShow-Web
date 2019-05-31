<template>
  <div>
    <el-card>
      <el-button type="primary" class="el-icon-plus" @click="addData">新增车辆</el-button>
      <div class="left">
        <el-form :inline="true" >
          <el-col :span="25">
            <el-form-item >
              <el-select placeholder="请选择车辆类型" value="" style="width:200px" clearable v-model="type">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select placeholder="请选择车辆状态" value="" style="width:200px" clearable v-model="status">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getTableData">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      <comp-table
        :tableData="tableData"
        :tableHeader="tableHeader"
        :tableAttr="tableAttr"
        :page="page"
        @tableOtherClick="editOrDelete"
      ></comp-table>
      <div>
        <comp-page
          @handleCurrentChange="handleCurrentChange"
          :page="page"
          :totalCount="totalCount"
          style="margin-left: 18px;margin-top: 20px;float: left"
        ></comp-page>
      </div>
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
      >
        <div>
          <span v-if="dialogVisible">车牌号为{{tableData[index].vehicleName}}的车辆状态：</span>
          <el-select v-model="value" placeholder="请选择车辆状态" value="">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editData">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import CompTable from '../../packages/components/table/index'
import CompPage from '../../packages/components/pagination/index'
import {vehicleApi} from './vehicleApi'

export default {
  name: 'resources',
  components: {
    CompTable,
    CompPage
  },
  data () {
    return {
      date: '',
      type: '',
      options: [{
        value: 0,
        label: '在途'
      }, {
        value: 1,
        label: '空闲'
      }, {
        value: 2,
        label: '维修'
      }],
      options2: [{
        value: 0,
        label: '大型车'
      }, {
        value: 1,
        label: '中型车'
      }, {
        value: 2,
        label: '小型车'
      }],
      options3: [{
        value: 0,
        label: '在途'
      }, {
        value: 1,
        label: '空闲'
      }, {
        value: 2,
        label: '维修'
      }],
      status: '',
      value: '',
      tableData: [],
      dialogVisible: false,
      tableHeader: [
        {
          prop: 'vehicleName',
          label: '车牌号'
        }, {
          prop: 'vehicleType',
          label: '车辆类型'
        }, {
          prop: 'purchaseTime',
          label: '购买时间'
        }, {
          prop: 'stationName',
          label: '站点名称'
        }, {
          prop: 'status',
          label: '车辆状态'
        }
      ],
      tableAttr: {index: {},
        other: [
          // {name: '查看', type: 'look'},
          {name: '更改车辆状态', type: 'edit'},
          {name: '删除', type: 'del', color: 'red'}
        ]},
      page: 1,
      totalCount: 100,
      pageSize: 5,
      mouseOver: true,
      buttClass: 'white',
      title: '',
      index: 0
    }
  },
  watch: {
    mouseOver (newVal) {
      if (newVal === true) this.buttClass = 'white'
      else this.buttClass = 'another'
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    handleCurrentChange (val) {
      this.page = val
      this.getTableData()
    },
    getTableData () {
      let userName = '';
      if (this.$store.getters.role === '站点负责人') {
        userName = this.$store.getters.userInfo;
      }
      vehicleApi.GetApi({page: this.page, pageSize: this.pageSize, vehicleType: this.type, status: this.status, userName: userName}).then(res => {
        this.tableData = res.data.data.list
        this.totalCount = res.data.data.total
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].status === 0) this.tableData[i].status = '在途'
          else if (this.tableData[i].status === 1) this.tableData[i].status = '空闲'
          else this.tableData[i].status = '维修'
          if (this.tableData[i].vehicleType === 0) this.tableData[i].vehicleType = '大型车'
          else if (this.tableData[i].vehicleType === 1) this.tableData[i].vehicleType = '中型车'
          else this.tableData[i].vehicleType = '小型车'
        }
      })
    },
    addData () {
      this.$router.push({name: 'addVehicle'})
      // vehicleApi.add().then(res => {
      //   if (res.data.code === 200) {
      //     this.$message({
      //       type: 'success',
      //       message: '修改成功'
      //     })
      //   } else {
      //     this.$message({
      //       type: 'failed',
      //       message: '修改失败'
      //     })
      //   }
      // })
    },
    editData () {
      vehicleApi.modify({vehicleId: this.tableData[this.index].vehicleId, status: this.value}).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        } else {
          this.$message({
            type: 'failed',
            message: '修改失败'
          })
        }
        this.dialogVisible = false;
        this.getTableData()
      })
    },
    deleteResource () {
      vehicleApi.delete({vehicleId: this.tableData[this.index].vehicleId}).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        } else {
          this.$message({
            type: 'failed',
            message: '删除失败'
          })
        }
        this.getTableData()
      })
    },
    editOrDelete (label, type, index) {
      this.index = index;
      if (type === 'edit') {
        this.value = this.tableData[this.index].status;
        this.dialogVisible = true;
        this.title = '编辑车辆状态';
      } else {
        this.$confirm('此操作将删除该车辆信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteResource()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
  .white {
    background-color: #ffffff;
    float: right;
    margin-top: 20px
  }
  .another {
    background-color: #DE7A35;
    float: right;
    margin-top: 20px;
    color: #ffffff;
  }
  .left{
    float:right;
  }
</style>
