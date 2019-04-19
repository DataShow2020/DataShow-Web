<template>
  <div>
    <h1>编辑</h1>
    <p>{{listValue}}</p>

    <div style="width: 100%;text-align: center;padding: 30px;">
      <router-link :to="{name:'orderManage'}">
        <el-button type="danger">返 回</el-button>
      </router-link>
    </div>
  </div>

</template>

<script>
    export default {
        name: "edit-order",
        data(){
          return{
            listValue:{},
          }
        },
        mounted(){
          this.getRowList()
        },
        components:{

        },
        methods:{
          getRowList: function () {
            this.listValue = this.$route.query.rowList;
            // console.log(this.listValue.orderId);
          }
        }
    }
</script>

<style scoped>

</style>
