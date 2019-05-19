<template>
    <div>
      <h1 style="margin: 20px;">员工编辑</h1>

      <el-card style="margin:20px;">

        <el-form :model="form" :rules="rules" ref="form">
          <el-col :span="12">
            <el-form-item prop="employeeId" label="员工ID" :label-width="formLabelWidth">
              <el-input v-model="form.employeeId" class="myInput" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
            <el-col :span="12">
              <el-form-item prop="employeeName" label="员工姓名" :label-width="formLabelWidth">
                <el-input v-model="form.employeeName" class="myInput"></el-input>
              </el-form-item>
            </el-col>
          <el-col :span="12">
            <el-form-item prop="stationName" label="工作站点" :label-width="formLabelWidth">
              <!--<el-input v-model="form.stationName" class="myInput"></el-input>-->
              <el-select v-model="form.stationId" filterable placeholder="请选择">
                <el-option
                  v-for="item in stations"
                  :key="item.value"
                  :label="item.stationName"
                  :value="item.stationId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="distributionName" label="工作配送点" :label-width="formLabelWidth">
              <!--<el-input v-model="form.distributionName" class="myInput"></el-input>-->
              <el-select v-model="form.distributionId" filterable placeholder="请选择">
                <el-option
                  v-for="item in distributions"
                  :key="item.value"
                  :label="item.distributionName"
                  :value="item.distributionId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
            <el-col :span="12">
              <el-form-item prop="age" label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" class="myInput"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="phone" label="员工电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" class="myInput"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="address" label="家庭住址" :label-width="formLabelWidth">
                <el-input v-model="form.address" class="myInput" placeholder="省/市/区/详细地址"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
            <el-form-item prop="workStartTime" label="入职时间" :label-width="formLabelWidth">
              <el-input v-model="form.workStartTime" class="myInput"></el-input>
            </el-form-item>
            </el-col>
        </el-form>

        <div style="width: 100%;text-align: center;padding: 20px;">
          <!--<el-button type="danger" @click="resetForm('form')">重 置</el-button>-->
          <el-button type="primary" @click="submitForm('form')">提 交</el-button>
          <router-link :to="{name:'employee'}">
            <el-button type="info">返 回</el-button>
          </router-link>
        </div>
        <!--<div style="width: 100%;text-align: center;padding: 30px;">-->
          <!---->
        <!--</div>-->
      </el-card>
    </div>
</template>

<script>
  import {EmployeeApi} from './api'
    export default {
        name: "edit-employee",
      data(){
          return{
           listValue:{},
            formLabelWidth:'120px',
            form:{
             employeeId:'',
              employeeName:'',
              workStartTime:'',
              stationId:'',
              distributionId:'',
              age:'',
              phone:'',
              address:''
            },
            distributions:[],
            stations:[],
            rules: {
              employeeName:[
                { required: true, message: '姓名'}
              ],
              age:[
                { required: true, message: '年龄不能为空'},
                { type: 'number', message: '年龄必须为数字值'}
              ],
              phone:[
                { required: true, message: '电话不能为空'},
              ]
            },

          }
      },
      mounted(){
        this.getRowList();
        this.getDistributions();
        this.getStations();
        this.getEmployee(this.listValue);
      },
      methods: {
        getRowList: function () {
          this.listValue = this.$route.query.rowList;
          // console.log(this.listValue.orderId);
          this.form = this.listValue;
        },
        /** 提交表单 */
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              EmployeeApi.EditorApi(this.form);
              alert('提交成功!');
              this.goToIndex();
            } else {
              console.log('提交失败!');
              return false;
            }
          });
        },
        goToIndex(){
          this.$router.push({name:'employee'});
        },
        /** 重置表单 */
        resetForm(formName) {
          console.log(formName);
          this.$refs[formName].resetFields();
        },
        /*获取后台数据*/
        getEmployee(employee) {
          this.listValue = EmployeeApi.GetItemApi(employee).then(res => {
            this.listValue = res.data.data;
            console.log("=======listValue========");
            console.log(this.listValue);
            this.form = this.listValue;
          })
        },

        /*获取所有的配送点*/
        getDistributions() {
          EmployeeApi.getDistributions().then(res => {
            this.distributions = res.data.data;
            console.log("========distributions=========");
            console.log(this.distributions);
          })
        },
        /*获取所有的站点*/
        getStations() {
          EmployeeApi.getStations().then(res => {
            this.stations = res.data.data;
            console.log("========stations=========");
            console.log(this.stations);
          })
        }
      }
    }
</script>

<style scoped>
.myInput{
  width: 300px;
}
  .el-button{
    width: 100px;
  }
</style>
