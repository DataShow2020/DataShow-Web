<template>
  <div>
    <div id="div1">
      <span style="font-size:18px;font-weight:bold;font-family: 微软雅黑">配送点详情</span>
    </div>
    <div id="div2">
      <table border="none" cellpadding="20" >
        <tr >
          <td>配送点名称：{{advertName}}</td>
          <td>负责人：{{activityName}}</td>
          <td>配送点地址：{{video}}</td>
        </tr>
        <tr >
          <td>运营商名称：{{operatorName}}</td>
          <td>备注：{{remark}}</td>
        </tr>
      </table>
    </div>
    <div id="button">
      <router-link to="advertisement"><el-button id="button1" type="primary">返回</el-button></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      advertName: 'this.$route.params.advertName',
      activityName: 'this.$route.params.activityName',
      video: 'this.$route.params.video',
      operatorName: 'this.$route.params.operatorName',
      remark: 'this.$route.params.remark'
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
