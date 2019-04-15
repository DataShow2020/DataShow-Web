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
    <div class="mainDiv"></div>
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '2'
    }
  },
  methods: {
    /** 导航栏菜单 */
    handleSelect(key, keyPath) {
      console.info('key', key)
      if (key == 1) {
        this.$router.push({name: 'logisticsConsult'})
      }
      if (key == 2) {
        this.$router.push({name: 'onlineOrder'});
      }
    },
  }
}

</script>

<style scoped>
.outDiv{
  width: 100%;
  height: 100%;
}
  .mainDiv{
    width: 100%;
    height: 94%;
  }
</style>
