<template>
  <div>
    <h1 style="margin: 20px;">员工详情 </h1>

    <el-card style="margin:20px;">

    <view-cont
      :listData="listData"
      :listValue="listValue"
      className="compVidewCont"
      labelWidth="80px"
      col="3"
    />


    <div style="width: 100%;text-align: center;padding: 30px;">
      <router-link :to="{name:'employee'}">
        <el-button type="danger">返 回</el-button>
      </router-link>
    </div>
  </el-card>
  </div>
</template>

<script>
  import viewCont from '../../packages/components/view-cont/index'
  import {EmployeeApi} from "./api";

  export default {
        name: "look-employee",
      data(){
          return{
            employeeId:'',
            listValue:{},
            listData: [
              {prop: 'employeeId', label: '员工号'},
              {prop: 'employeeName', label: '姓名',},
              {prop: 'age', label: '年龄',},
              {prop: 'phone', label: '电话',},
              {prop: 'stationName', label: '工作站点',},
              {prop: 'distributionName', label: '工作配送点',},
              {prop: 'workStartTime', label: '入职时间',},
            ],
          }
      },
      mounted(){
        this.getRowList();
        this.getData();
      },
    components:{
      viewCont
    },
      methods:{
        getRowList: function () {
          this.listValue = this.$route.query.rowList;
        },
        /** 后台获取内容 */
        getData() {
          console.log("11111111111");
          console.log(this.listValue.employeeId);
          this.employeeId = this.listValue.employeeId;
          // 没有通过正常渠道进入该界面
          if (this.employeeId === null) {
            return;
          }

          EmployeeApi.GetItemApi({employeeId: this.listValue.employeeId}).then(res => {
            this.listValue = res.data.data;
          });

        },
      }
    }
</script>

<style scoped>

</style>
