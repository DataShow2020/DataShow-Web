<template>
    <div class="outDiv">
      <div class="searchDiv">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item :prop="orderNom">
            <el-input prefix-icon="el-icon-search" v-model="ruleForm.orderNom">
            </el-input>
            <el-button round @click="searchOrder">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
/* eslint-disable key-spacing */

export default {
  name: 'index',
  data () {
    return {
      ruleForm:{orderNom:''},
      rules:{
        orderNom:[{ required: true, message: '请输入物流单号', trigger: 'blur' },
          { min: 8, max: 13, message: '长度在 8 到 13 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    searchOrder: function () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$router.push({name:'searchResult'})
          this.resetForm()
        } else {
          this.$message({
            showClose: true,
            message: '操作失败',
            type: 'error'
          })
          return false
        }
      })
    },
    resetForm () {
      this.$refs['ruleForm'].resetFields()
    }

  }
}
</script>

<style scoped>
.outDiv{
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/logisticsConsult.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
  .searchDiv{
    width: 20%;
    height:10%;
    margin: 0 auto;
    padding-top: 18%;
  }
/*.el-input--medium .el-input__inner /deep/{*/
  /*height: 42px;*/
  /*line-height: 36px;*/
/*}*/
  .el-button{
    color: white;
    background-color: #46086b;
    border-color: #46086b;
    position: absolute;
    top: 0%;
    left: 81.4%;
  }
</style>
