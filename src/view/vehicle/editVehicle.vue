<template>
  <public
    :formLabelAlign="formLabelAlign"
    :stationTitle="stationTitle"
    @formSubClick="formSubClick"
  >
  </public>
</template>

<script>
  import {vehicleApi} from './vehicleApi'
  import Public from './public'
export default {
  name: 'editVehicle',
  data () {
    return {
      formLabelAlign: {
        stationName: '',
        manager: '',
        address: '',
        carName: '',
        remark: '',
        created: ''
      },
      stationTitle: '站点编辑'
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
      vehicleApi.EditStationApi(item).then(res => {
        this.$router.push({name: 'vehicle'})
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
