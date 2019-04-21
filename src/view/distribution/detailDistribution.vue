<template>
  <div>
    <div id="div1">
      <span style="font-size:18px;font-weight:bold;font-family: 微软雅黑">配送点详情</span>
    </div>
    <div id="div2">
      <table border="none" cellpadding="20" >
        <tr >
          <td>配送点名称：{{distributionName}}</td>
          <td>配送点地址：{{address}}</td>
          <td>负责人：{{userName}}</td>
          <td>创建单位：{{createdUnit}}</td>
        </tr>
        <tr >
          <td>启用时间：2018-11-2</td>
          <td>停用时间：2019-11-2</td>
          <td>备注：{{remark}}</td>
        </tr>
      </table>
    </div>
    <div id="button">
      <router-link to="distribution"><el-button id="button1" type="primary">返回</el-button></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      distributionName: this.$route.params.distributionName,
      address: this.$route.params.address,
      createdUnit: this.$route.params.createdUnit,
      remark: this.$route.params.remark,
      userName: this.$route.params.userName
    }
  }
}
</script>

<style scoped>
  table{
    position: relative;
    margin-left:60px;
    text-align: left;
    font-size:15px;
    border:none;
  }
  table td{
    width:400px;
    border:none;
  }
  #button{
    position: relative;
    margin-left:550px;
    margin-top:50px;
  }
  #button1{
    background-color:red;
    font-family: 微软雅黑;
    font-weight:bold;
    font-size: 13px;
    float:left;
    color:white;
  }
  #div1{
    position: relative;
    margin-left:30px;
  }
  #div2{
    margin: auto;

    magrin-top:300px;

    height: 200px;

    width:95%;

    background-color:white;

    text-align: right;

    ont-family:微软雅黑;

    font-size:20px;
  }
</style>
