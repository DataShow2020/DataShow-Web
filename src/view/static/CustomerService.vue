<template>
  <div class="service">
    <div style="width: 100%;height: 96%">
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
        <el-menu-item index="3">关于我们</el-menu-item>
      </el-menu>
    </div>
    <div style="width: 100%;">
      <img src="../../assets/images/logo2.jpg" class="back-img">
      <div class="fix-box">
        <h1 class="center_text" >客服中心</h1>
        <!--<div class="line-style"></div>-->
        <div style="margin-top: 20px;">JieYun物流更快 更安全</div>
      </div>
    </div>
    <div class="service-main">
      <div style="width: 100%;height: 45%">
        <div class="main-title">
          <span style="margin-bottom: 1px">客服中心</span>
        </div>
        <div class="first-info">
          <img class="img-info" src="../../assets/images/phone.png"/>
          <div class="info-right">
            <span style="margin:3px auto 4px">直接拨打全国服务电话</span>
            <p style="line-height: 26px;font-size: 20px;margin-top: 10px">400-123456</p>
            <el-button type="primary" style="background-color: green!important;border: none!important;margin-top: 10px">
              免费服务
            </el-button>
          </div>
        </div>
      </div>
      <div style="width:100%;height:200px; margin-top: 5px">
        <div class="main-title">联系我们</div>
        <div class="second-info">
          <p class="label">查询热线 : 400-123456</p>
          <p class="label">加盟热线 : 400-123456</p>
          <p class="label_block">投诉热线 : 400-123456</p>
          <p class="label_block">公司地址 : 重庆市XXXXXXXXXXXXXXXX</p>
          <p class="label_block">邮政编码 : 123456</p>
        </div>
      </div>
    </div>
    </div>
    <div class="service-bottom">
      <p style="padding-top: 0.4%">JieYu物流客服电话：023-123456</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerService',
  data () {
    return {
      activeIndex: '3'
    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
  .service {
    width: 100%;
    height: 100%;
    background-color: #E0E0E0;
  }

  .logo_black {
    width: 172px;
    height: 50px;
    margin-top: 10px;
    float: left;
  }

  .slider {
    margin-left: 65px;
    float: left;
    margin-top: 30px;
    text-decoration: none;
  }

  .back-img {
    width: 100%;
    height: 450px;
  }

  .fix-box {
    position: absolute;
    top: 100px;
    left: 50px;
    height:5%
  }

  .center_text {
    width: 100%;
    letter-spacing: 5px;

  }

  .line-style {
    width: 20px;
    height: 4px;
    background-color: #0293ed;
    margin-top: 20px;
  }

  .service-main {
    padding: 23px 37px 0 29px;
    background-color: white;
    width: 1000px;
    height: 50%;
    margin: -300px auto 0;
    z-index: 2;
    position: relative;
  }

  .main-title {
    border-bottom: 1px solid #E0E0E0;
    height: 5%;
    line-height: 0px;
    font-weight: bold;
  }

  .first-info {
    margin-top: 50px;
    margin-left: 380px;
  }

  .label {
    display: inline-block;
    margin-right: 134px;
    margin-bottom: 17px;
  }

  .img-info {
    float: left;
    display: inline;
  }

  .info-right {
    float: left;
    margin-left: 28px;
    display: inline;
    text-align: center;

  }

  .second-info {
    float: left;
    margin: 30px 0 0;
  }

  .label_block {
    margin-right: 134px;
    margin-bottom: 13px;
  }

  .service-bottom {
    text-align: center;
    height: 4%;
    width: 100%;
    background-color: #30383D;
    color: white;
    float: bottom;
  }
</style>
