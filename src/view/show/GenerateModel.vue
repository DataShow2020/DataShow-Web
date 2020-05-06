<template>
  <div style="width: 100%; height: 100%; background-color: white">
    <div style="height: 10%; width: 40%;padding-top: 15%;padding-left: 30%;position: relative">
      <el-input v-model="input" placeholder="请输入一段搜索内容"></el-input>
      <el-button type="primary" round size="big" @click="submit()" style="margin-left: 35%;margin-top: 3%;padding-left: 13%;padding-right: 13%">确 定</el-button>
    </div>

  </div>
</template>

<script>

import {NewApi as Api} from "./Api";

export default {
  name: 'GenerateModel',
  data () {
    return {
      input: ''
    }
  },
  methods:{
    submit(){
      Api.submit(this.data).then(res =>{

      })
    }
  }
}
</script>

<style scoped>

</style>
