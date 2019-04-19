<template xmlns="">
  <div id="add-order">
    <el-card>
      <el-form :model="form" :rules="rules" ref="form">
        <el-row>
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
        </el-row>


        <el-row>
          <el-col :span="12">
            <el-form-item prop="sender" label="寄件人姓名" :label-width="formLabelWidth">
              <el-input v-model="form.sender" class="myInput"></el-input>
            </el-form-item>
            <el-form-item prop="senderPhone" label="寄件人电话" :label-width="formLabelWidth">
              <el-input v-model="form.senderPhone" class="myInput"></el-input>
            </el-form-item>
            <el-form-item prop="senderAddress" label="寄件人地址" :label-width="formLabelWidth">
              <el-input v-model="form.senderAddress" class="myInput" placeholder="省/市/区/详细地址"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item prop="receiver" label="收件人姓名" :label-width="formLabelWidth">
              <el-input v-model="form.receiver" class="myInput"></el-input>
            </el-form-item>
            <el-form-item prop="receiverPhone" label="收件人电话" :label-width="formLabelWidth">
              <el-input v-model="form.receiverPhone" class="myInput"></el-input>
            </el-form-item>
            <el-form-item prop="receiveAddress" label="收件地址" :label-width="formLabelWidth">
              <el-input v-model="form.receiveAddress" class="myInput" placeholder="省/市/区/详细地址"></el-input>
            </el-form-item>
          </el-col>

          <el-form-item prop="shipTime" label="发件时间" :label-width="formLabelWidth">
            <el-input v-model="form.shipTime" class="myInput"></el-input>
          </el-form-item>
      </el-row>
      </el-form>

      <div style="width: 100%;text-align: center;padding: 20px;">
        <el-button type="danger">重 置</el-button>
        <el-button type="primary">提 交</el-button>
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
          this.$refs[formName].resetFields();
        }
      }

    }
</script>

<style scoped>
.myInput{
  width: 300px;
}
</style>
