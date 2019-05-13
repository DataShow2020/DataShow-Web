<template>
  <div>
    <public
      :stationTitle="stationTitle"
      :formLabelAlign="formLabelAlign"
      @formSubClick="formSubClick"
    >
    </public>
  </div>
</template>

<script>
import {NewApi} from './Api'
import Public from './public'
export default {
  data () {
    return {
      formLabelAlign: {
        distributionName: '',
        address: '',
        distributionNumber: '',
        remark: '',
        createdUnit: ''
      },
      stationTitle: '配送点新增'
    }
  },
  mounted () {
    // this.getOption()
  },
  components: {
    Public
  },
  methods: {
    formSubClick: function (item) {
      NewApi.AddDistributionApi(item).then((res) => {
        this.$router.push({name: '配送点管理'})
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style scoped>
  .box-card {
    position: relative;
    margin-left:30px;
    width:95%;
    height:300px;

  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }

  #div1{
    position: relative;
    margin-left:30px;
  }
  #button1{
    background-color:red;
    font-family: 微软雅黑;
    font-weight:bold;
    font-size: 13px;
    float:left;
    color:white;
  }
  #button2{
    background-color:gray;
    font-family: 微软雅黑;
    font-weight:bold;
    font-size: 13px;
    float:left;
    color:white;
  }
  #button{
    position: relative;
    margin-left:550px;
    margin-top:30px;
  }
  #form{
    position: relative;
    margin-left:20px;
    margin-bottom: 20px;
    width:80%;
    height:350px;
  }
</style>
