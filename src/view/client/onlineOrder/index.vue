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
      <el-row style="height: 80%;">
        <el-col :span="7" style="height: 100%;margin-left: 2.5%">
          <el-card>
            <p style="text-align: center; font-size: 150%;font-weight: 600;color: #ff781d">寄件方</p>
            </br>
            <el-form :model="sendForm" :rules="sendRules" ref="sendForm" label-width="100px" label-position="top">
              <el-form-item label="真实姓名">
                <el-input v-model="sendForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="省/市/区">
                <el-input v-model="sendForm.city" placeholder="请输入省市区"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="sendForm.address" placeholder="请输入地址"></el-input>
              </el-form-item>
              <el-form-item label="手机">
                <el-input v-model="sendForm.smartPthone" placeholder="手机或电话必填一项"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="sendForm.tel" placeholder="如：021-69777888"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="7" style="height: 100%;margin-left: 4%">
          <el-card style="margin-bottom: 15%">
            <p style="text-align: center; font-size: 150%;font-weight: 600; color: #75c476">收件方</p>
            </br>
            <el-form :model="receiptForm" :rules="receiptRules" ref="receiptForm" label-width="100px" label-position="top">
              <el-form-item label="真实姓名">
                <el-input v-model="receiptForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="省/市/区">
                <el-input v-model="receiptForm.city" placeholder="请输入省市区"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="receiptForm.address" placeholder="请输入地址"></el-input>
              </el-form-item>
              <el-form-item label="手机">
                <el-input v-model="receiptForm.smartPthone" placeholder="手机或电话必填一项"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="receiptForm.tel" placeholder="如：021-69777888"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="7" style="height: 100%;margin-left: 4%">
          <el-card>
            <p style="text-align: center; font-size: 150%;font-weight: 600;color: #132542">物品信息</p>
            </br>
            <el-form :model="itemInformationForm" :rules="itemInformationRules" ref="itemInformationForm" label-width="100px" label-position="top">
              <el-form-item label="特殊备注">
                <el-input v-model="itemInformationForm.remarks"></el-input>
              </el-form-item>
              <el-form-item label="内件品名">
                <el-input v-model="itemInformationForm.name" placeholder="请输入物品的名称"></el-input>
              </el-form-item>
              <el-form-item label="物品重量（kg）">
                <el-input v-model="itemInformationForm.weight" placeholder="请输入物品大致重量"></el-input>
              </el-form-item>
              <el-form-item label="时效产品">
                <el-input v-model="itemInformationForm.agingProduct" placeholder="标准快递"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
      <div style="text-align: center;margin-top: 2%">
              <el-button style="color: white;width: 18%;height:7%;background-color: #6291f1;font-size: 150%">提&nbsp;&nbsp;交</el-button>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '2',
      sendRules: [],
      sendForm: [],
      receiptRules: [],
      receiptForm: [],
      itemInformationForm: [],
      itemInformationRules: []
    }
  },
  methods: {
    /** 导航栏菜单 */
    handleSelect (key, keyPath) {
      console.info('key', key)
      if (key == 1) {
        this.$router.push({name: 'logisticsConsult'})
      }
      if (key == 2) {
        this.$router.push({name: 'onlineOrder'})
      }
    }
  }
}

</script>

<style scoped>
.outDiv{
  width: 100%;
  height: 100%;
}
  .mainDiv{
    width: 86%;
    height: 83.7%;
    background-color: #f1f4f5;
    padding-top: 6%;
    padding-left: 7%;
    padding-right: 7%;
  }

  .el-card{
    height:100%;
  }
</style>
