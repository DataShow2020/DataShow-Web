<template>
  <div class="OutDiv">
    <div style="width:25%; height: 51%;float: left;display: inline;position: relative;margin-top: 10%;margin-left: 9%">
      <age></age>
    </div>
    <div style="width: 25%;height: 51%; float: left;display: inline;position: relative;margin-top: 10%;margin-left: 3%">
      <Gender ></Gender>
    </div>
    <div style="width: 25%; height:51%; float: left;display: inline;margin-left: 3%;margin-top: 10%">
    <Education></Education>
    </div>
  </div>
</template>

<script>
  import Gender from './Gender'
  import Age from './Age'
  import Education from './Education'
export default {
  name: 'index',
  methods:{},
  components: {
    Gender,
    Age,
    Education
  }
}
</script>

<style scoped>
.OutDiv{
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/images/totalCountIndexBackground.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
</style>
