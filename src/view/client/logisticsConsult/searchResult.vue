<template>
  <div class="outDiv">
    <div style="width: 100%; height: 6.5%">
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
        <el-menu-item index="5">返回</el-menu-item>
      </el-menu>
    </div>
    <div class="topDiv">
      <div class="searchDiv">
          <el-col :span="16">
            <el-input prefix-icon="el-icon-search" v-model="orderNom">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button round @click="searchOrder">查询</el-button>
          </el-col>
      </div>
    </div>
    <div class="footDiv">
      <p style="font-size: 22px;margin-left: 18%; margin-top: 0.5%; font-weight: 600">查询结果</p>
      <p v-if="status === 3 & list.length !== 0" style="margin-left: 30%; font-size: 30px;font-weight: 400">已签收</p></p>
      <!--<el-col :span="8">-->
      <p style="font-size: 16px;margin-left: 18%; margin-top: 1%; font-weight: 400">
        运单号：<strong>{{orderNom}}</strong>
      <!--</el-col>-->
      <!--<el-col :span="16">-->
      <!--<p style="font-size: 16px;margin-left: 18%;">已签收</p>-->
      <!--</el-col>-->
      <p style="font-size: 16px; margin:-0.5% 0 1% 19%; font-weight: 200; color: #999999">
        _______________________________________________________________________________________________________________________________________
      </p>
      <div style="width: 80%;margin-left: 20%;">
        <p style="font-size: 16px;margin-bottom: 1%; color: grey" v-for="i in list">{{i.arriveTime}}&nbsp;快件已到达{{i.stationName}}</p>
        <p v-if="list.length === 0">暂无订单信息</p>
      </div>
      <p style="font-size: 16px;margin-left:19%; font-weight: 200; color: #999999">
        _______________________________________________________________________________________________________________________________________
      </p>
    </div>
    <div class="evaluate" v-if="list.length !== 0">
      <p style="font-size: 22px;font-weight: 600; color: #347bbd;">满意度调查</p>
      <div style="margin-left: 1%; margin-top: 2%; height: 100px;width: 200px">
        <el-rate v-model="evaluateValue"></el-rate>
        <el-button style="margin-top: 10%; margin-left: 10%" @click="evaluate">提交</el-button>
      </div>

    </div>
  </div>
</template>

<script>

import {logisticsApi} from './logisticsApi'

export default {
  name: 'search-result',
  data () {
    return {
      ruleForm: {orderNom: ''},
      orderNom: '',
      evaluateValue: '',
      activeIndex: '1',
      list: {},
      status:''
    }
  },
  mounted () {
    this.orderNom = this.$route.params.orderNom
    this.doit()
  },
  methods: {
    /** 导航栏菜单 */
    handleSelect (key, keyPath) {
      if (key == 1) {
        this.$router.push({name: 'logisticsConsult'})
      }
      if (key == 2) {
        this.$router.push({name: 'onlineOrder'})
      }
      if (key == 3) {
        this.$router.push({name: 'CustomerService'})
      }
      if (key == 4) {
        this.$router.push({name: 'aboutUs'})
      }
      if (key == 5) {
        this.$router.push({name: 'home'})
      }
    },

    /** 查询 */
    searchOrder: function () {
      if (this.orderNom !== '') {
        logisticsApi.consult({order: this.orderNom}).then(res => {
          this.list = res.data.data
        })
        logisticsApi.getEvaluate({orderId: this.orderNom}).then(res => {
          this.evaluateValue = res.data.data[0].evaluate;
          this.status = res.data.data[0].status;
          console.info(res.data.data)
          console.info('4444444444',this.status)
        })
        // this.orderNom = ''
        this.evaluateValue = ''
      } else {
        this.$message({
          showClose: true,
          message: '请输入订单号',
          type: 'error'
        })
        return false
      }
    },

    /** 调用接口 */
    doit(){
      logisticsApi.consult({order: this.orderNom}).then(res => {
        this.list = res.data.data
      })
      logisticsApi.getEvaluate({orderId: this.orderNom}).then(res => {
        this.evaluateValue = res.data.data[0].evaluate
        this.status = res.data.data[0].status;
      })
    },

    // resetForm () {
    //   this.$refs['ruleForm'].resetFields()
    // },

    /** 评价 */
    evaluate: function () {
      logisticsApi.evaluate({evaluate: this.evaluateValue, order: this.orderNom}).then(res => {
        if (res.data.code === 200) {
          this.$message({
            showClose: true,
            message: '评价成功',
            type: 'success'
          })
        } else {
          this.$message({
            showClose: true,
            message: '评价失败',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .outDiv {
    width: 100%;
    height: 100%;
  }

  .topDiv {
    width: 100%;
    height: 30%;
    background: url("../../../assets/images/logisticsConsult.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #cccccc;
  }

  .searchDiv {
    width: 24%;
    height: 14%;
    /*margin: 0 auto;*/
    margin-left: 18%;
    padding-top: 11%;
  }

  .el-button {
    color: white;
    background-color: #46086b;
    border-color: #46086b;
    height: 35px;
    /*position: absolute;*/
    /*top: 34.7%;*/
    /*left: 34%;*/
  }

  .evaluate {
    height: 20%;
    margin-left: 18%;
    margin-top: 1%;
  }

  /*.el-rate__item/deep/.el-rate__icon el-icon-star-off{*/
    /*height: 50px;*/
    /*width: 50px;*/
  /*}*/
</style>
