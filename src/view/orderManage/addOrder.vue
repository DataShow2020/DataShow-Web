<template xmlns="">
  <div id="add-order">
    <el-card>
      <el-form :model="form" :rules="rules" ref="form">
        <!--<el-row>-->
          <el-col :span="12">
            <el-form-item prop="name" label="内件名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" class="myInput"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="totalCount" label="产品数量" :label-width="formLabelWidth">
            <!--<el-input v-model="form.totalCount"></el-input>-->
              <el-input-number
                v-model="form.totalCount"
                @change="handleChangeCount"
                :min="1"
                :max="1000"
                label="产品数量">
              </el-input-number>
            </el-form-item>
          </el-col>
        <!--</el-row>-->


        <!--<el-row>-->
          <el-col :span="12">
            <el-form-item prop="sender" label="寄件人姓名" :label-width="formLabelWidth">
              <el-input v-model="form.sender" class="myInput"></el-input>
            </el-form-item>
          </el-col>

        <el-col :span="12">
            <el-form-item prop="receiver" label="收件人姓名" :label-width="formLabelWidth">
              <el-input v-model="form.receiver" class="myInput"></el-input>
            </el-form-item>
          </el-col>

        <el-col :span="12">
            <el-form-item prop="senderPhone" label="寄件人电话" :label-width="formLabelWidth">
              <el-input v-model="form.senderPhone" class="myInput"></el-input>
            </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="receiverPhone" label="收件人电话" :label-width="formLabelWidth">
            <el-input v-model="form.receiverPhone" class="myInput"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="senderAddress" label="寄件人地址" :label-width="formLabelWidth">
            <el-input v-model="form.senderAddress" class="myInput" placeholder="省/市/区/详细地址"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="receiveAddress" label="收件地址" :label-width="formLabelWidth">
            <el-input v-model="form.receiveAddress" class="myInput" placeholder="省/市/区/详细地址"></el-input>
          </el-form-item>
        </el-col>




          <el-col :span="12">
          <el-form-item prop="shipTime" label="发件时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.shipTime"
              type="datetime"
              class="myInput"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="kg" label="大致重量" :label-width="formLabelWidth">
              <el-input v-model="form.kg" class="myInput"></el-input>
            </el-form-item>
          </el-col>

        <el-col :span="12">
            <el-form-item prop="remark" label="其他说明" :label-width="formLabelWidth">
              <el-input v-model="form.remark" class="myInput"></el-input>
            </el-form-item>
        </el-col>
      <!--</el-row>-->


      </el-form>
      <div style="width: 100%;text-align: center;padding: 20px;">
        <el-button type="danger" @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">提 交</el-button>
      </div>

    </el-card>

      <div style="width: 100%;text-align: center;padding: 30px;">
        <router-link :to="{name:'orderManage'}">
        <el-button type="danger">返 回</el-button>
        </router-link>
      </div>


  </div>

</template>

<script>
  import {orderManageApi} from './api.js'
    export default {
        name: "add-order",
      data(){
        return {

          dialogTitle:'',
          dialogFormVisible:false,
          formLabelWidth:'120px',
          form:{
            name:'',
            totalCount:1,
            sender:'',
            senderPhone:'',
            senderAddress:'',
            receiver:'',
            receiverPhone:'',
            receiveAddress:'',
            shipTime:'',
            kg:'',
            remark:'',
          },
          rules:{
            name: [
              { required: true, message: '不能为空', trigger: 'blur' },
            ],
            sender: [
              { required: true, message: '寄件人姓名不能为空', trigger: 'blur' },
            ],
            senderPhone: [
              { required: true, message: '寄件人电话不能为空', trigger: 'blur' }
            ],
            senderAddress: [
              { required: true, message: '寄件地址不能为空', trigger: 'blur' }
            ],
            receiver: [
              { required: true, message: '收件人不能为空', trigger: 'blur' }
            ],
            receiverPhone: [
              { required: true, message: '收件人电话不能为空', trigger: 'blur' }
            ],
            receiveAddress: [
              { required: true, message: '收件地址不能为空', trigger: 'blur' }
            ],
          }



        }
      },
      methods:{
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
              orderManageApi.AddOrderApi(this.form);
              alert('提交成功!');
            } else {
              console.log('提交失败!');
              return false;
            }
          });
        },
      }

    }
</script>

<style scoped>
.myInput{
  width: 300px;
}
</style>
