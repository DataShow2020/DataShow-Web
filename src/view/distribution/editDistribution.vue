<template>
  <div>
    <public
      :formLabelAlign="formLabelAlign"
      :stationTitle="stationTitle"
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
        createdUnit: '',
        userId:'',
        userName:''
      },
      stationTitle: '配送点编辑'
    }
  },
  components: {
    Public
  },
  mounted () {
    this.formLabelAlign = this.$route.params
  },
  methods: {
    formSubClick: function (item) {
      NewApi.EditDistributionApi(item).then(res => {
        this.$router.push({name: '配送点管理'})
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
    }
  }
}

</script>

<style scoped>

</style>
