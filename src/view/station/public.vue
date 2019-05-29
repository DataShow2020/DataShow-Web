<template>
  <div>
    <div id="div1">
    <span style="font-weight:bold;font-family: 微软雅黑;font-size:20px;margin-bottom: 2px" >{{stationTitle}}</span>
    </div>
    <el-card class="box-card">
      <el-form :label-position="labelPosition" ref="formLabelAlign" label-width="100px"  :model="formLabelAlign" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="站点名称" :rules="[
            { required: true, message: '请输入站点名称', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ]" prop="stationName">
              <el-input v-model="formLabelAlign.stationName" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="所属负责人" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="userId">
              <el-select  v-model="formLabelAlign.userId" clearable placeholder="请选择">
                <el-option
                  v-for="item in option"
                  :key="item.value"
                  :label="item.userName"
                  :value=" item.userId ">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="地址" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="address">
              <el-input v-model="formLabelAlign.address" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="备注" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="remark" clearable>
              <el-input v-model="formLabelAlign.remark" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="创建单位" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="createdUnit" clearable>
              <el-input v-model="formLabelAlign.createdUnit" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="关闭时间" prop="createdUnit" clearable>
              <el-date-picker
                v-model="formLabelAlign.endTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <div id="button">
      <el-button id="button1" style="width: 80px;" type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
      <router-link to="station"><el-button id="button2" style="width: 80px;" type="info">取消</el-button></router-link>
    </div>
  </div>
</template>

<script>
import {NewApi} from './Api'
export default {
  data () {
    return {
      stationTitle: '站点编辑',
      option: [],
      formLabelAlign: {
        stationName: '',
        userId: '',
        address: '',
        remark: '',
        createdUnit: '',
        stationId: '',
        stationNumber: '',
        endTime:''//结束时间
      }
    }
  },
  mounted () {
    this.getOption()
  },
  props: {
    stationTitle: String,
    formLabelAlign: Object

  },
  methods: {
    // 获取下拉框的值
    getOption: function () {
      NewApi.GetManagerOptionApi().then(res => {
        this.option = res.data.data
      })
    },
    submitForm: function (formLabelAlign) {
      this.$refs[formLabelAlign].validate((valid) => {
        if (valid) {
          this.$emit('formSubClick', this.formLabelAlign)
        } else {
          return false
        }
      })
    },
    resetForm (formLabelAlign) {
      this.$refs[formLabelAlign].resetFields()
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
