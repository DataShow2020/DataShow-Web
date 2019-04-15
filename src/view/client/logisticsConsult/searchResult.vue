<template>
  <div class="outDiv">
    <div style="width: 100%; height: 6%">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">物流查询</el-menu-item>
        <el-menu-item index="2">在线下单</el-menu-item>
        <el-menu-item index="3">客服中心</el-menu-item>
        <el-menu-item index="4">关于我们</el-menu-item>
      </el-menu>
    </div>
    <div class="topDiv">
      <div class="searchDiv">
        <el-input prefix-icon="el-icon-search" v-model="ruleForm.orderNom">
        </el-input>
        <el-button round @click="searchOrder">查询</el-button>
      </div>
    </div>
    <div class="footDiv">
      <p style="font-size: 22px;margin-left: 18%; margin-top: 0.5%; font-weight: 600">查询结果</p>
      <!--<el-col :span="8">-->
        <p style="font-size: 16px;margin-left: 18%; margin-top: 1%; font-weight: 400">
          运单号：<strong>123456789456123</strong>
        </p>
      <!--</el-col>-->
     <!--<el-col :span="16">-->
       <!--<p style="font-size: 16px;margin-left: 18%;">已签收</p>-->
     <!--</el-col>-->
        <p style="font-size: 16px; margin:-0.5% 0 1% 19%; font-weight: 200; color: #999999">
          _______________________________________________________________________________________________________________________________________
        </p>
      <div style="width: 80%;margin-left: 20%;">
        <p style="font-size: 16px;">fdoisafjdoiaujfdosapjfh</p>

      </div>
      <p style="font-size: 16px;margin-left:19%; font-weight: 200; color: #999999">
        _______________________________________________________________________________________________________________________________________
      </p>
    </div>
    <div class="evaluate">
      <p style="font-size: 22px;font-weight: 600; color: #347bbd;">满意度调查</p>
      <div style="margin-left: 1%; ">
        <el-rate v-model="evaluate"></el-rate>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search-result',
  data () {
    return {
      ruleForm: {orderNom: ''},
      evaluate:'',
      activeIndex:'1',
    }
  },
  methods: {
    /** 导航栏菜单 */
    handleSelect (key, keyPath) {
      console.info('key', key)
      if (key == 1) {
        this.$router.push({name:'logisticsConsult'})
      }
      if (key == 2) {
        this.$router.push({name:'onlineOrder'}) ;
      }
    },

    /** 查询 */
    searchOrder: function () {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
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

    /** 清空表单 */
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
}
  .topDiv{
    width: 100%;
    height: 40%;
    background: url("../../../assets/images/logisticsConsult.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #cccccc;
  }
.searchDiv{
  width: 20%;
  height:10%;
  /*margin: 0 auto;*/
  margin-left: 18%;
  padding-top: 17%;
}
.el-button{
  color: white;
  background-color: #46086b;
  border-color: #46086b;
  position: absolute;
  top: 34.7%;
  left: 34%;
}
  .evaluate{
    margin-left: 18%;
    margin-top: 1.5%;
  }
</style>
