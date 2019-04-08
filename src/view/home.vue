<template>
  <div style=" width: 100%;height: 460px">
    <slide :slides="slides" :inv="inv" :style="styleObject"></slide>
    <div class="butt">
    <img src="../assets/images/logo_black.png" alt="logo">
    </div>
    <div class="two-butt">
      <!--<el-button @click="login" class="left-butt">登录</el-button>-->
      <!--<el-button @click="register" class="right-butt">注册</el-button>-->
      <el-button @click="management" class="right-butt">后台管理</el-button>
    </div>
    <div class="butt-position">
      <el-button @click="search" class="one">物流查询</el-button>
      <el-button @click="order" class="two">在线下单</el-button>
      <el-button @click="question" class="three">客服中心</el-button>
      <el-button @click="about" class="four">关于我们</el-button>
    </div>
  </div>
</template>

<script>
  import slide from '../packages/components/slide/slide'

  export default {
    name: "index",
    components: {
      slide
    },
    data() {
      return {
        slides: [
          {'src':require('../assets/images/logo1.jpg')},
          {'src':require('../assets/images/logo2.jpg')},
          {'src':require('../assets/images/logo3.jpg')}
        ],
        inv: 2000,
        styleObject: {
          width: '100%',
          height: '460px'
        }
      }
    },
    methods: {
      login() {

      },
      register() {

      },
      search() {

      },
      order() {

      },
      question() {

      },
      about() {

      },
      management() {
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style scoped>
  .butt {
    display: inline-block;
    position: absolute;
    top: 3%;
    left: 5%;
  }
  .two-butt {
    display: inline-block;
    position: absolute;
    top: 5%;
    left: 70%;
  }
  .left-butt {
    background-color: burlywood;
    color: #ffffff;
    width: 150px;
    height: 40px;
    font-size: 18px;
  }
  .right-butt {
    background-color: #333333;
    color: #ffffff;
    width: 150px;
    height: 40px;
    font-size: 18px;
    margin-left: 250px;
  }
  .one {
    background-color: darkgoldenrod;
    color: #ffffff;
    width: 360px;
    height: 250px;
    font-size: 25px;
  }
  .two {
    background-color: lightpink;
    color: #ffffff;
    width: 360px;
    height: 250px;
    font-size: 25px;
  }
  .three {
    background-color: forestgreen;
    color: #ffffff;
    width: 360px;
    height: 250px;
    font-size: 25px;
  }
  .four {
    background-color: #999999;
    color: #ffffff;
    width: 360px;
    height: 250px;
    font-size: 25px;
  }
  .butt-position {
    margin-top: 10px;
    margin-left: 25px;
  }
</style>
