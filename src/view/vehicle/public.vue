<!--<template>-->
  <!--<div>-->
    <!--<div id="div1">-->
      <!--<span style="font-weight:bold;font-family: 微软雅黑;font-size:20px;margin-bottom: 2px" >{{stationTitle}}</span>-->
    <!--</div>-->
    <!--<el-card class="box-card">-->
      <!--<el-form ref="formLabelAlign" label-width="100px"  :model="formLabelAlign" class="demo-form-inline">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="7">-->
            <!--<el-form-item label="车牌号" :rules="[-->
            <!--{ required: true, message: '请输入车牌号', trigger: 'blur' },-->
            <!--{ min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }-->
          <!--]" prop="vehicleName">-->
              <!--<el-input v-model="formLabelAlign.vehicleName" placeholder="请输入" clearable></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
          <!--<el-col :span="7">-->
            <!--<el-form-item label="车辆类型" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="type">-->
              <!--<el-select placeholder="请选择车辆类型" value="" style="width:200px" clearable v-model="formLabelAlign.type">-->
                <!--<el-option-->
                  <!--v-for="item in formLabelAlign.options2"-->
                  <!--:key="item.value"-->
                  <!--:label="item.label"-->
                  <!--:value="item.value">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
          <!--<el-col :span="7">-->
            <!--<el-form-item label="购买时间" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="date">-->
              <!--<el-date-picker-->
                <!--v-model="formLabelAlign.date"-->
                <!--type="date"-->
                <!--style="width:170px"-->
                <!--clearable-->
                <!--format="yyyy/MM/dd"-->
                <!--value-format="yyyy/MM/dd"-->
                <!--placeholder="请选择购买时间"-->
                <!--:picker-options="endDatePicker">-->
              <!--</el-date-picker>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="7">-->
            <!--<el-form-item label="站点名称" :rules="[{required: true, message:'不能为空',trigger:'blur'}]" prop="stationId" clearable>-->
              <!--<el-select v-model="formLabelAlign.stationId"  placeholder="请选择" value="">-->
                <!--<el-option-->
                  <!--v-for="item in formLabelAlign.options3"-->
                  <!--:key="item.stationId"-->
                  <!--:label="item.stationName"-->
                  <!--:value="item.stationId">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</el-form-item>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</el-form>-->
    <!--</el-card>-->
    <!--<div id="button">-->
      <!--<el-button id="button1" style="width: 80px;" type="primary" @click="submitForm('formLabelAlign')">提交</el-button>-->
      <!--<router-link to="vehicle"><el-button id="button2" style="width: 80px;" type="info">取消</el-button></router-link>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import {vehicleApi} from './vehicleApi'-->
<!--export default {-->
  <!--data () {-->
    <!--return {-->
      <!--stationTitle: '车辆编辑',-->
      <!--formLabelAlign: {-->
        <!--date: '',-->
        <!--options2: [],-->
        <!--stationName: '',-->
        <!--options3: [],-->
        <!--stationId: '',-->
        <!--type: '',-->
        <!--vehicleName: ''-->
      <!--},-->
      <!--endDatePicker: this.processDate(),-->
    <!--}-->
  <!--},-->
  <!--mounted () {-->
    <!--this.getOption()-->
  <!--},-->
  <!--methods: {-->
    <!--// 获取下拉框的值-->
    <!--getOption: function () {-->
      <!--vehicleApi.getStationApi().then(res => {-->
        <!--this.formLabelAlign.options3 = res.data.data;-->
        <!--console.log(this.formLabelAlign.options3)-->
      <!--})-->
    <!--},-->
    <!--submitForm: function (formLabelAlign) {-->
      <!--this.$refs[formLabelAlign].validate((valid) => {-->
        <!--if (valid) {-->
          <!--this.$emit('formSubClick', this.formLabelAlign)-->
        <!--} else {-->
          <!--return false-->
        <!--}-->
      <!--})-->
    <!--},-->
    <!--processDate() {-->
      <!--return {-->
        <!--disabledDate(time) {-->
          <!--return time.getTime() > Date.now();-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--resetForm (formLabelAlign) {-->
      <!--this.$refs[formLabelAlign].resetFields()-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.box-card {-->
    <!--position: relative;-->
    <!--margin-left:30px;-->
    <!--width:95%;-->
    <!--height:250px;-->

  <!--}-->
  <!--.el-row {-->
    <!--margin-bottom: 20px;-->
  <!--&:last-child {-->
     <!--margin-bottom: 0;-->
   <!--}-->
  <!--}-->
  <!--.el-col {-->
    <!--border-radius: 4px;-->
  <!--}-->

  <!--#div1{-->
    <!--position: relative;-->
    <!--margin-left:30px;-->
  <!--}-->
  <!--#button1{-->
    <!--background-color:red;-->
    <!--font-family: 微软雅黑;-->
    <!--margin-right:20px;-->
    <!--font-weight:bold;-->
    <!--font-size: 13px;-->
    <!--float:left;-->
    <!--color:white;-->
  <!--}-->
  <!--#button2{-->
    <!--background-color:gray;-->
    <!--font-family: 微软雅黑;-->
    <!--font-weight:bold;-->
    <!--font-size: 13px;-->
    <!--float:left;-->
    <!--color:white;-->
  <!--}-->
  <!--#button{-->
    <!--position: relative;-->
    <!--margin-left:550px;-->
    <!--margin-top:30px;-->
  <!--}-->
  <!--#form{-->
    <!--position: relative;-->
    <!--margin-left:20px;-->
    <!--margin-bottom: 20px;-->
    <!--width:80%;-->
    <!--height:350px;-->
  <!--}-->
<!--</style>-->
