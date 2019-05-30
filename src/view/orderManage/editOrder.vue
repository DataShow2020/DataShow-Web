<template>
  <div>
    <h1>修改订单</h1>
    <el-card>
    <!--<h1>编辑</h1>-->
    <!--<p>{{listValue}}</p>-->
    <el-form :model="form" :rules="rules" ref="form">
        <el-col :span="12">
          <el-form-item prop="orderId" label="订单号" :label-width="formLabelWidth">
            <el-input v-model="form.orderId" class="myInput" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="status" label="订单状态" :label-width="formLabelWidth">
            <el-select v-model="form.status" placeholder="请选择">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      <el-col :span="12" v-if="userRole==='总公司管理员'">
        <el-form-item prop="distributionId" label="配送点" :label-width="formLabelWidth">
          <el-select v-model="form.distributionId" placeholder="请选择">
            <el-option
              v-for="item in distributions"
              :key="item.distributionId"
              :label="item.distributionName"
              :value="item.distributionId">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

        <el-col :span="12">
          <el-form-item prop="stationName" label="已到达" :label-width="formLabelWidth">
            <el-select v-model="form.stationName" placeholder="请选择">
              <el-option
                v-for="item in stations"
                :key="item.stationId"
                :label="item.stationName"
                :value="item.stationId">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      <el-col :span="12">
      <el-form-item prop="nextStation" label="下一站" :label-width="formLabelWidth">
        <el-select v-model="form.nextStationName" placeholder="请选择">
          <el-option
            v-for="item in stations"
            :key="item.stationId"
            :label="item.stationName"
            :value="item.stationId">
          </el-option>
        </el-select>
          </el-form-item>
      </el-col>


       <el-col :span="12">
          <el-form-item prop="arriveTime" label="到达时间" :label-width="formLabelWidth">
            <!--<el-input v-model="form.arriveTime" class="myInput"></el-input>-->
            <el-date-picker
              v-model="form.arriveTime"
              class="myInput"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>

    </el-form>

    <div style="width: 100%;text-align: center;padding: 20px;">
      <!--<el-button type="danger" @click="resetForm('form')">重 置</el-button>-->
      <el-button type="primary" @click="submitForm('form')">提 交</el-button>
      <router-link :to="{name:'orderManage'}">
        <el-button type="danger">返 回</el-button>
      </router-link>
    </div>

    </el-card>
  </div>

</template>

<script>
  import {orderManageApi} from "./api";

  export default {
        name: "edit-order",
        data(){
          return{
            listValue:{},
            formLabelWidth:'120px',
            form:{
              orderId:'',
              status:'',
              stationName:'',
              nextStationName:'',
              arriveTime:'',
              distributionId:''
            },
            rules:{
              orderId: {required: true, message: '不能为空', trigger: 'blur'},
              status: {required: true, message: '不能为空', trigger: 'blur'},
              currentStation: {required: true, message: '不能为空', trigger: 'blur'},
              nextStation: {required: true, message: '不能为空', trigger: 'blur'},
              arriveTime: {required: true, message: '不能为空', trigger: 'blur'},
              distributionId: {required: true, message: '不能为空', trigger: 'blur'}
            },
            userRole:'',
            statusOptions:[
              {value:1,label:'已下单'},
              {value:2,label:'运输中'},
              {value:3,label:'已签收'},
              {value:4,label:'已评价'},
            ],
            stations:[],
            distributions:[]
          }
        },
        mounted(){
          this.userRole=this.$store.getters.role;
          this.getRowList();
          this.getOrder(this.listValue);
          this.getStations();
          this.getDistributions();
        },
        components:{

        },
        methods:{
          getRowList: function () {
            this.listValue = this.$route.query.rowList;
            this.form=this.listValue;
            console.log("当前用户");
            console.log(this.$store.getters)
          },
          /** 改变计数器的值 */
          handleChangeCount(value) {
            console.log(value);
          },

          /** 提交表单 */
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                orderManageApi.EditorApi(this.form).then(res=>{
                  console.log("========编辑========");
                  console.log(res.data);
                  if(res.data.data){
                    this.$message({type:'success',message:'提交成功！'})
                    this.$router.push({name:'orderManage'});
                  }else{
                    this.$message({type:'error',message:'提交失败！'})
                  }
                  })
              } else {
                this.$message({type:'error',message:'提交失败！'})
              }
            });
          },
          getOrder(order){
              this.listValue=orderManageApi.GetItemApi(order).then(res => {
                this.listValue = res.data.data;
                console.log(this.listValue);
                this.form=this.listValue;
            })
          },
          /* 获取所有的站点 */
          getStations () {
            orderManageApi.getStations().then(res => {
              this.stations = res.data.data
              console.log("======stations=========")
              console.log(this.stations)
            })
          },
          getDistributions(){
            orderManageApi.getDistributions().then(res=>{
              this.distributions=res.data.data;
              console.log("=======配送点=======");
              console.log(this.distributions);
            })
          }
        }
  }
</script>

<style scoped>
.myInput{
  width: 320px;
}
  .el-button{
    width: 100px;
    margin: 10px;
  }
</style>
