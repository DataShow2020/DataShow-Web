<template>
  <div>
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
            <!--<el-input v-model="form.status" class="myInput"></el-input>-->
            <el-select v-model="form.status" placeholder="请选择">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-input-number
              v-model="form.totalCount"
              @change="handleChangeCount"
              :min="1"
              :max="1000"
              label="产品数量">
            </el-input-number>-->
          </el-form-item>
        </el-col>


        <el-col :span="12">
          <el-form-item prop="currentStation" label="已到达" :label-width="formLabelWidth">
            <el-input v-model="form.currentStation" class="myInput"></el-input>
          </el-form-item>
        </el-col>
      <el-col :span="12">
      <el-form-item prop="nextStation" label="下一站" :label-width="formLabelWidth">
            <el-input v-model="form.nextStation" class="myInput"></el-input>
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
      <el-button type="danger" @click="resetForm('form')">重 置</el-button>
      <el-button type="primary" @click="submitForm('form')">提 交</el-button>
    </div>

    <div style="width: 100%;text-align: center;padding: 30px;">
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
              currentStation:'',
              nextStation:'',
              arriveTime:'',
            },
            rules:{
             /* receiveAddress: [
                { required: true, message: '收件地址不能为空', trigger: 'blur' }
              ],*/
            },
            statusOptions:[
              {value:1,label:'已下单'},
              {value:2,label:'运输中'},
              {value:3,label:'已签收'},
              {value:4,label:'已评价'},
            ],
          }
        },
        mounted(){
          this.getRowList();
          this.getOrder(this.listValue);
        },
        components:{

        },
        methods:{
          getRowList: function () {
            this.listValue = this.$route.query.rowList;
            this.form=this.listValue;
            // console.log(this.listValue.orderId);
          },
          /** 改变计数器的值 */
          handleChangeCount(value) {
            console.log(value);
          },
          /** 重置表单 */
          resetForm(formName) {
            console.log(formName);
            this.$refs[formName].resetFields();
          },
          /** 提交表单 */
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                orderManageApi.EditorApi(this.form);
                alert('提交成功!');
              } else {
                console.log('提交失败!');
                return false;
              }
            });
          },
          getOrder(order){
              this.listValue=orderManageApi.GetItemApi(order).then(res => {
                this.listValue = res.data.data;
                console.log(this.listValue);
                this.form=this.listValue;
            })
          }
        }
  }
</script>

<style scoped>
.myInput{
  width: 320px;
}
</style>
