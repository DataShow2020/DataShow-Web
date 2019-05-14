<template>
  <div>
    <div id="div1">
    <span style="font-weight:bold;font-family: 微软雅黑;font-size:20px;margin-bottom: 2px" >{{stationTitle}}</span>
    </div>
    <el-card class="box-card">
      <el-form :label-position="labelPosition" ref="formLabelAlign" label-width="100px"  :model="formLabelAlign" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="配送点名称" :rules="[
            { required: true, message: '请输入配送站点名称', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ]" prop="distributionName">
              <el-input v-model="formLabelAlign.distributionName" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="配送点编号" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="distributionNumber">
              <el-input v-model="formLabelAlign.distributionNumber" placeholder="请输入" clearable></el-input>
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
            <el-form-item label="创建单位" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="createdUnit" clearable>
              <el-input v-model="formLabelAlign.createdUnit" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="备注" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="remark" clearable>
              <el-input v-model="formLabelAlign.remark" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <div id="button">
      <el-button id="button1" style="width: 80px;" type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
      <router-link to="distribution"><el-button id="button2" style="width: 80px;" type="info">取消</el-button></router-link>
    </div>
  </div>
</template>

<script>
import {NewApi} from './Api'
export default {
  data () {
    return {
      stationTitle: '配送点编辑',
      advertOption: [],
      option: [],
      formLabelAlign: {
        distributionName: '',
        userName: '',
        userId: '',
        address: '',
        remark: '',
        distributionNumber: '',
        createdUnit: ''
      }
    }
  },
  mounted () {
  },
  props: {
    stationTitle: String,
    formLabelAlign: Object

  },
  methods: {
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
