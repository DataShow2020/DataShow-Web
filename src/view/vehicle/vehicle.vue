<template>
  <div>
    <el-card style="width: 96%;margin-left:2%;margin-top: 18px;border-radius: 0 !important;">
      <div style="width: 130px;float: right">
        <div v-if="!mouseOver" style="margin-top: 25px;float: left;font-size: 16px;">新增资源</div>
        <el-button :class="buttClass" @mouseover.native="changeButt" @mouseout.native="recovery" @click="addData">+</el-button>
      </div>
      <comp-table
        :tableData="tableData"
        :tableHeader="tableHeader"
        :tableAttr="tableAttr"
        :page="page"
        @editDelete="editOrDelete"
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
          <el-form ref="formInputData" :model="formInputData" label-width="80px" :rules="rule">
            <el-form-item label="模块名称" prop="model">
              <el-input v-model.number="formInputData.model" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="数量调整" prop="amount">
              <el-input v-model.number="formInputData.amount" autocomplete="off"></el-input>
            </el-form-item>
            <el-select v-model="value" placeholder="请选择" value="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form>
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
    var validateAmount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入调整数量'))
      } else if (value < this.editMin) {
        callback(new Error('调整数量不能小于' + this.editMin))
      } else {
        callback()
      }
    }
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      formInputData: {
        model: '',
        amount: ''
      },
      rule: {
        amount: [
          {required: true, message: '请输入数量调整数额', trigger: 'blur'},
          {type: 'number', message: '调整数额必须为数字', trigger: 'blur'},
          { validator: validateAmount, trigger: 'blur' }]
      },
      tableData: [{
        vehicleName: '2016-05-02',
        vehicleType: '王小虎',
        purchaseTime: '2016-05-02',
        distributionName: '王小虎',
        stationName: '2016-05-02',
        status: '王小虎'
      }, {
        vehicleName: '2016-05-04',
        vehicleType: '王小虎',
        purchaseTime: '2016-05-02',
        distributionName: '王小虎',
        stationName: '2016-05-02',
        status: '王小虎'
      }, {
        vehicleName: '2016-05-01',
        vehicleType: '王小虎',
        purchaseTime: '2016-05-02',
        distributionName: '王小虎',
        stationName: '2016-05-02',
        status: '王小虎'
      }, {
        vehicleName: '2016-05-03',
        vehicleType: '王小虎',
        purchaseTime: '2016-05-02',
        distributionName: '王小虎',
        stationName: '2016-05-02',
        status: '王小虎'
      }],
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
          prop: 'distributionName',
          label: '配送点名称'
        }, {
          prop: 'stationName',
          label: '站点名称'
        }, {
          prop: 'status',
          label: '车辆状态'
        }
      ],
      tableAttr: {index: {}, other: {}},
      page: 1,
      totalCount: 100,
      pageSize: 5,
      mouseOver: true,
      buttClass: 'white',
      title: ''
    }
  },
  watch: {
    mouseOver (newVal) {
      if (newVal === true) this.buttClass = 'white'
      else this.buttClass = 'another'
    }
  },
  mounted () {
    // this.getTableData()
  },
  methods: {
    handleCurrentChange (val) {
      this.page = val
    },
    getTableData () {
      vehicleApi.getData().then(res => {
        this.tableData = res.data.data
      })
    },
    recovery () {
      this.mouseOver = true
    },
    changeButt () {
      this.mouseOver = false
    },
    addData () {
      this.dialogVisible = true
      this.title = '新增资源'
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
      vehicleApi.modify({}).then(res => {
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
        this.getTableData()
      })
    },
    deleteResource () {
      vehicleApi.delete().then(res => {
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
      })
    },
    editOrDelete (index, label) {
      if (label === 'edit') {
        this.dialogVisible = true
        this.title = '编辑资源'
      } else {
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
</style>
