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
    <div class="mainDiv">
      <el-row>
        <el-col :span="7" style="margin-left: 2.5%">
          <el-card>
            <p style="text-align: center; font-size: 150%;font-weight: 600;color: #ff781d">寄件方</p>
            </br>
            <el-form :model="sendForm" :rules="sendRules" ref="sendForm" label-width="100px" label-position="top">
              <el-form-item label="真实姓名" prop="sendName">
                <el-input v-model="sendForm.sendName" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="省/市/区" prop="sendCity">
                <el-input v-model="sendForm.sendCity" placeholder="请输入省市区"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="sendAddress">
                <el-input v-model="sendForm.sendAddress" placeholder="请输入地址"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="sendSmartPhone">
                <el-input v-model="sendForm.sendSmartPhone" placeholder="请输入手机号"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="7" style="margin-left: 4%">
          <el-card>
            <p style="text-align: center; font-size: 150%;font-weight: 600; color: #75c476">收件方</p>
            </br>
            <el-form :model="sendForm" :rules="sendRules" ref="sendForm" label-width="100px"
                     label-position="top">
              <el-form-item label="真实姓名" prop="receiptName">
                <el-input v-model="sendForm.receiptName" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="省/市/区" prop="receiptCity">
                <el-input v-model="sendForm.receiptCity" placeholder="请输入省市区"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="receiptAddress">
                <el-input v-model="sendForm.receiptAddress" placeholder="请输入地址"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="receiptSmartPhone">
                <el-input v-model="sendForm.receiptSmartPhone" placeholder="手机或电话必填一项"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="7" style="margin-left: 4%">
          <el-card style="height: 505px">
            <p style="text-align: center; font-size: 150%;font-weight: 600;color: #132542">物品信息</p>
            </br>
            <el-form :model="sendForm" :rules="sendRules" ref="sendForm"
                     label-width="100px" label-position="top">
              <el-form-item label="特殊备注" prop="itemRemarks">
                <el-input v-model="sendForm.itemRemarks"></el-input>
              </el-form-item>
              <el-form-item label="内件品名" prop="itemName">
                <el-input v-model="sendForm.itemName" placeholder="请输入物品的名称"></el-input>
              </el-form-item>
              <el-form-item label="物品重量（kg）" prop="itemWeight">
                <el-input v-model="sendForm.itemWeight" placeholder="请输入物品大致重量"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
      <div style="text-align: center;margin-top: 2%">
        <el-button style="color: white;width: 18%;height:7%;background-color: #6291f1;font-size: 150%" @click="submmit">
          提&nbsp;&nbsp;交
        </el-button>
      </div>
    </div>
  </div>

</template>

<script>
import {onlineOrderApi} from './onlineOrderApi'

export default {
  name: 'index',
  data () {
    return {
      activeIndex: '2',
      sendForm: {
        sendName: '',
        sendCity: '',
        sendAddress: '',
        sendSmartPhone: '',
        itemRemarks: '',
        itemName: '',
        itemWeight: '',
        receiptName: '',
        receiptCity: '',
        receiptAddress: '',
        receiptSmartPhone: ''
      },
      sendRules: {
        sendName: {required: true, message: '请输入内容', trigger: 'blur'},
        sendCity: {required: true, message: '请输入内容', trigger: 'blur'},
        sendAddress: {required: true, message: '请输入内容', trigger: 'blur'},
        sendSmartPhone: {required: true, message: '请输入内容', trigger: 'blur'},
        itemName: {required: true, message: '请输入内容', trigger: 'blur'},
        itemWeight: {required: true, message: '请输入内容', trigger: 'blur'},
        receiptName: {required: true, message: '请输入内容', trigger: 'blur'},
        receiptCity: {required: true, message: '请输入内容', trigger: 'blur'},
        receiptAddress: {required: true, message: '请输入内容', trigger: 'blur'},
        receiptSmartPhone: {required: true, message: '请输入内容', trigger: 'blur'}
      }
    }
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
    },
    submmit () {
      this.$refs['sendForm'].validate((valid) => {
        if (valid) {
          onlineOrderApi.insert(this.sendForm).then(res => {
            if (res.data.code === 200) {
              this.$alert('下单成功', '信息', {
                confirmButtonText: '确定'
              })
              this.$refs['sendForm'].resetFields()
            } else {
              this.$alert('下单失败', '信息', {
                confirmButtonText: '确定'
              })
            }
          })
        } else {
          this.$alert('下单失败', '信息', {
            confirmButtonText: '确定'
          })
          this.$refs['sendForm'].resetFields()
          return false
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

  .mainDiv {
    width: 86%;
    height: 85.4%;
    background-color: #f1f4f5;
    padding-top: 4%;
    padding-left: 7%;
    padding-right: 7%;
  }
</style>
