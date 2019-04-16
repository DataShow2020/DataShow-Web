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
import {vehicleApi} from './vehicleApi'
import Public from './public'
export default {
  name: 'addVehicle',
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
      stationTitle: '车辆新增'
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
      vehicleApi.AddStationApi(item).then((res) => {
        this.$router.push({name: 'vehicle'})
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

</style>
