<template>
  <div style=" width: 100%;height: 100%" class="element">
    <div style="width: 100%;height: 60%">
      <slide :slides="slides" :inv="inv" :style="styleObject"></slide>
      <div class="butt">
        <img src="../assets/images/logo_black.png" alt="logo" style="width: 100%;height: 100%">
      </div>
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
  name: 'index',
  components: {
    slide
  },
  data () {
    return {
      slides: [
        {'src': require('../assets/images/logo1.jpg')},
        {'src': require('../assets/images/logo2.jpg')},
        {'src': require('../assets/images/logo3.jpg')}
      ],
      inv: 2000,
      styleObject: {
        width: '100%',
        height: '100%'
      }
    }
  },
  methods: {
    login () {

    },
    register () {

    },
    search () {
      this.$router.push({name: 'logisticsConsult'})
    },
    order () {
      this.$router.push({name: 'onlineOrder'})
    },
    question () {

    },
    about () {

    },
    management () {
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
    width: 10%;
    height: 10%;
  }
  .two-butt {
    position: absolute;
    top: 25px;
    right: 100px;
    width: 5%;
    height: 5%;
  }
  .left-butt {
    background-color: burlywood;
    color: #ffffff;
    width: 40%;
    height: 40%;
    font-size: 18px;
  }
  .right-butt {
    background-color: #333333;
    font-size: 1rem;
    color: #ffffff;
  }
  .one {
    background-color: darkgoldenrod;
    color: #ffffff;
    width: 24%;
    height: 100%;
    font-size: 200%;
    margin: 0;
    padding: 0;
  }
  .two {
    background-color: lightpink;
    color: #ffffff;
    width: 24%;
    height: 100%;
    font-size: 200%;
    margin: 0;
    padding: 0;
  }
  .three {
    background-color: forestgreen;
    color: #ffffff;
    width: 24%;
    height: 100%;
    font-size: 200%;
    margin: 0;
    padding: 0;
  }
  .four {
    background-color: #999999;
    color: #ffffff;
    width: 24%;
    height: 100%;
    font-size: 200%;
    margin: 0;
    padding: 0;
  }
  .butt-position {
    margin: 0 2.5% 0;
    width: 97.5%;
    height: 40%;
  }
</style>
