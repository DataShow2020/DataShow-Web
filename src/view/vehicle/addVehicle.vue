<template>
  <div>
    <div id="div1">
      <span style="font-weight:bold;font-family: 微软雅黑;font-size:20px;margin-bottom: 2px" >{{stationTitle}}</span>
    </div>
    <el-card class="box-card">
      <el-form ref="formLabelAlign" label-width="100px"  :model="formLabelAlign" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="车牌号" :rules="[
            { required: true, message: '请输入车牌号', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ]" prop="vehicleName">
              <el-input v-model="formLabelAlign.vehicleName" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="车辆类型" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="vehicleType">
              <el-select placeholder="请选择车辆类型" value="" style="width:200px" clearable v-model="formLabelAlign.vehicleType">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="购买时间" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="purchaseTime">
              <el-date-picker
                v-model="formLabelAlign.purchaseTime"
                type="date"
                style="width:170px"
                clearable
                placeholder="请选择购买时间"
                :picker-options="endDatePicker">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="站点名称" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="stationId" clearable>
              <el-select v-model="formLabelAlign.stationId"  placeholder="请选择" value="">
                <el-option
                  v-for="item in options3"
                  :key="item.stationId"
                  :label="item.stationName"
                  :value="item.stationId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!--<el-col :span="7">-->
            <!--<el-form-item label="司机姓名" :rules="[-->
            <!--{ required: true, message: '请输入司机姓名', trigger: 'blur' },-->
            <!--{ min: 2, max: 5, message: '长度在 2 - 5 个字符', trigger: 'blur' }-->
          <!--]" prop="driverName">-->
              <!--<el-input v-model="formLabelAlign.driverName" placeholder="请输入" clearable></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
          <!--<el-col :span="7">-->
            <!--<el-form-item label="司机电话" :rules="[-->
            <!--{ required: true, message: '请输入司机电话', trigger: 'blur' },-->
            <!--{ min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }-->
          <!--]" prop="driverPhone">-->
              <!--<el-input v-model="formLabelAlign.driverPhone" placeholder="请输入" clearable></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
        </el-row>
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="7">-->
            <!--<el-form-item label="身份证号" :rules="[-->
            <!--{ required: true, message: '请输入身份证号', trigger: 'blur' },-->
            <!--{ min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }-->
          <!--]" prop="cardId">-->
              <!--<el-input v-model="formLabelAlign.cardId" placeholder="请输入" clearable></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
        <!--</el-row>-->
      </el-form>
    </el-card>
    <div id="button">
      <el-button id="button1" style="width: 100px;background-color: #DE7A35" type="primary" @click="submitForm">提交</el-button>
      <router-link to="vehicle"><el-button id="button2" style="width: 100px;" type="info">取消</el-button></router-link>
    </div>
  </div>
</template>

<script>
import {vehicleApi} from './vehicleApi'
export default {
  data () {
    return {
      stationTitle: '车辆新增',
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
      options3: [],
      formLabelAlign: {
        purchaseTime: '',
        stationId: '',
        vehicleType: '',
        vehicleName: '',
        driverPhone: '',
        driverName: '',
        cardId: ''
      },
      endDatePicker: this.processDate()
    }
  },
  mounted () {
    this.getStationName()
  },
  methods: {
    submitForm: function () {
      this.$refs['formLabelAlign'].validate((valid) => {
        if (valid) {
          vehicleApi.AddApi(this.formLabelAlign).then(() => {
            this.$router.push({name: 'vehicle'})
            this.$message({
              message: '恭喜你，添加成功',
              type: 'success'
            })
          })
        } else {
          return false
        }
      })
    },
    getStationName () {
      vehicleApi.getStationApi().then(res => {
        this.options3 = res.data.data
      })
    },
    processDate () {
      return {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  }
}
</script>

<style scoped>
  .box-card {
    position: relative;
    margin-left:30px;
    width:95%;
    height:250px;
    margin-top: 20px;
    padding-top: 20px;

  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }

  #div1{
    position: relative;
    margin-left:30px;
  }
  #button1{
    background-color:red;
    font-family: 微软雅黑;
    margin-right:20px;
    font-weight:bold;
    font-size: 13px;
    float:left;
    color:white;
  }
  #button2{
    background-color:gray;
    font-family: 微软雅黑;
    font-weight:bold;
    font-size: 13px;
    float:left;
    color:white;
  }
  #button{
    position: relative;
    margin-left:550px;
    margin-top:30px;
  }
  #form{
    position: relative;
    margin-left:20px;
    margin-bottom: 20px;
    width:80%;
    height:350px;
  }
</style>
