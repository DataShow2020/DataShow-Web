<template>
  <div>
    <div id="div1">
      <span style="font-size:18px;font-weight:bold;font-family: 微软雅黑">站点详情</span>
    </div>
    <div style="height: 10px;"></div>
    <div id="div2">
      <table border="none" cellpadding="20" >
        <tr >
          <td>站点名称：{{advertName}}</td>
          <td>地址：{{activityName}}</td>
          <td>创建单位：{{video}}</td>
        </tr>
        <tr >
          <td>启用时间：{{operatorName}}</td>
          <td>停用时间：{{remark}}</td>
          <td>备注： </td>
        </tr>
      </table>
    </div>
    <div id="button">
      <router-link to="station"><el-button type="primary">返回</el-button></router-link>
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
