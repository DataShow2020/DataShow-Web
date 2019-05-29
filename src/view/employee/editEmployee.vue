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
            <el-form-item prop="employeeType" label="员工类型" :label-width="formLabelWidth">
              <el-select v-model="form.employeeType" filterable placeholder="请选择">
                <el-option
                  v-for="item in employeeTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
            <el-col :span="12">
              <el-form-item prop="age" label="年龄" :label-width="formLabelWidth" type="number">
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
          <el-button type="primary" @click="submitForm('form')">提 交</el-button>
          <router-link :to="{name:'employee'}">
            <el-button type="info">返 回</el-button>
          </router-link>
        </div>

      </el-card>
    </div>
</template>

<script>
import {EmployeeApi} from './api'
export default {
  name: 'edit-employee',
  data () {
    var validateRank = (rule, value, callback) => {
      var reg = /^[1-9]\d*$/;
      if (value === '') {
        callback(new Error('请输入年龄!'));
      } else if (!reg.test(value)) {
        callback(new Error('请输入正整数!'));
      } else {
        callback();
      }
    };

    return {
      listValue: {},
      formLabelWidth: '120px',
      form: {
        employeeId: '',
        employeeName: '',
        workStartTime: '',
        employeeType:'',
        age: '',
        phone: '',
        address: ''
      },
      employeeTypes:[{
        value: '配送点管理员',
        label: '配送点管理员'
      }, {
        value: '站点管理员',
        label: '站点管理员'
      }],
      rules: {
        employeeName: [
          { required: true, message: '姓名'}
        ],
        age: [
          { required: true, message: '年龄不能为空'},
          {required: true, validator: validateRank, trigger: 'blur'}
        ],
        phone: [
          { required: true, message: '电话不能为空'}
        ]
      }

    }
  },
  mounted () {
    this.getRowList();
    this.getEmployee(this.listValue)
  },
  methods: {
    getRowList: function () {
      this.listValue = this.$route.query.rowList;
      // console.log(this.listValue.orderId);
      this.form = this.listValue
    },
    /** 提交表单 */
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          EmployeeApi.EditorApi(this.form).then(res=>{
            console.log("=====biaji=======");
            if (res.data.data === true){
              this.$message({type: 'success', message: '修改成功！'});
              this.$router.push({name:'employee'});
            }
            else{
              this.$message({type: 'error', message: '修改失败，请重试'})
            }
          })
        } else {
          this.$message({type: 'error', message: '修改失败，请重试'})
        }
      })
    },
    /** 重置表单 */
    resetForm (formName) {
      console.log(formName)
      this.$refs[formName].resetFields()
    },
    /* 获取后台数据 */
    getEmployee (employee) {
      this.listValue = EmployeeApi.GetItemApi(employee).then(res => {
        this.listValue = res.data.data;
        console.log('=======listValue========');
        console.log(res);
        this.form = this.listValue
      })
    },


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
