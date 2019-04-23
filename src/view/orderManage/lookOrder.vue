<template>
  <div>
    <el-card>
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
              {prop: 'itemName', label: '物品名称',},
              {prop: 'sender', label: '物品名称',},
              {prop: 'sendPhone', label: '寄件人电话',},
              {prop: 'sendCity', label: '寄件人城市',},
              {prop: 'sendAddress', label: '起点',},
              {prop: 'receiver', label: '收件人',},
              {prop: 'receivePhone', label: '收件人电话',},
              {prop: 'receiveCity', label: '收件人城市',},
              {prop: 'receiveAddress', label: '收件人地址',},
              {prop: 'currentStation', label: '已到达',},
              {prop: 'nextStation', label: '下一站',},
              {prop: 'kg', label: '大致重量',},
              {prop: 'remark', label: '其他说明',},
              {prop: 'price', label: '邮费',},
              {prop: 'count', label: '数量',},
              {prop: 'evaluation', label: '评价等级',},

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
        this.getData();
      },

      methods:{
        getRowList: function () {
          this.listValue = this.$route.query.rowList;
          console.log(this.listValue.orderId);
        },

        /** 后台获取内容 */
        getData() {
          this.orderId = this.listValue.orderId;
          // 没有通过正常渠道进入该界面
          if (this.orderId === null) {
            return;
          }
          orderManageApi.GetItemApi({orderId: this.orderId}).then(res => {
            this.listValue = res.data.data;
          });
        },
      }
    }
</script>

<style scoped>

</style>
