<template>
  <div>
    <el-card>
      <h1>查看</h1>
      <view-cont
        :listData="listData"
        :listValue="listValue"
        className="compVidewCont"
        labelWidth="80px"
        col="3"
      />


    <div style="width: 100%;text-align: center;padding: 30px;">
      <router-link :to="{name:'orderManage'}">
        <el-button type="danger">返 回</el-button>
      </router-link>
    </div>
    </el-card>
  </div>
</template>

<script>
  import viewCont from '../../packages/components/view-cont/index'
  import {orderManageApi} from './api'
    export default {
        name: "look-order",
      data(){
          return{
            listData: [
              {prop: 'orderId', label: '订单号'},
              {prop: 'productName', label: '物品名称',},
              {prop: 'startDistribution', label: '起点',},
              {prop: 'endDistribution', label: '终点',},
              {prop: 'currentStation', label: '已到达',},
              {prop: 'nextStation', label: '下一站',},
              {prop: 'kg', label: '大致重量',},
              {prop: 'sender', label: '寄件人',},
              {prop: 'senderPhone', label: '寄件人电话',},
              {prop: 'senderAddress', label: '寄件地址',},
              {prop: 'receiver', label: '收件人',},
              {prop: 'receiverPhone', label: '收件人电话',},
              {prop: 'receiveAddress', label: '收件人地址',},

            ],
            listValue:{},
            orderId:'',

          }
      },
      components:{
        viewCont
      },
      mounted(){
        this.getRowList();
        // this.getData();
      },

      methods:{
        getRowList: function () {
          this.listValue = this.$route.query.rowList;
          console.log(this.listValue.orderId);
        },

        /** 后台获取内容 */
       /* getData() {
          this.orderId = this.listValue.orderId;
          // 没有通过正常渠道进入该界面
          if (this.orderId === null) {
            return;
          }
          orderManageApi.GetItemApi({orderId: this.orderId}).then(res => {
            this.data = res.data.data;
          });
        },*/
      }
    }
</script>

<style scoped>

</style>
