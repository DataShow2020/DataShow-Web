<template>
  <div>
    <div class="start">
      <el-row :gutter="25">
        <el-col :span="6" >
          <el-button type="primary" @click="searchCar"  icon="el-icon-plus">增加</el-button>
        </el-col>
        <div class="left">
        <el-form :inline="true" v-model="searchFilter">
        <el-col :span="25" class="right">
          <el-form-item >
          <el-input  v-model="searchFilter.stationName" style="width:200px" @keyup.enter.native="searchCar" placeholder="请输入配送点名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchFilter.manager" style="width:170px" @keyup.enter.native="searchCar" placeholder="请输入负责人" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchCar"  icon="el-icon-search">搜索</el-button>
        </el-form-item>
        </el-col>
        </el-form>
    </div>
      </el-row>
 </div>
    <el-table
      :data="stationInfo"
      border
      width="100%">
      <el-table-column
        :resizable="isResizable"
        type="index"
        label="序号"
        width="100" >
      </el-table-column>
      <el-table-column
        :resizable="isResizable"
        prop="distributionName"
        label="配送点名称"
       >
        <template slot-scope="scope">
          <!--<p v-show="scope.row.plateNumber != null && (scope.row.holdType == '1' || scope.row.holdType == '2')" @click="vehiclePicture(scope.row)" style="cursor:pointer;color:#409EFF;">{{ scope.row.plateNumber }}</p>-->
          <!--<span v-show="scope.row.plateNumber != null && (scope.row.holdType == '3' || scope.row.holdType == '4')">{{ scope.row.plateNumber }}</span>-->
          <!--<span v-show="scope.row.plateNumber == null">&#45;&#45;</span>-->
        </template>
      </el-table-column>
      <el-table-column
        :resizable="isResizable"
        prop="address"
        label="配送点地址">
        <template slot-scope="scope">
          <!--<span v-show="scope.row.productModel != null">{{ scope.row.productModel }}</span>-->
          <!--<span v-show="scope.row.productModel == null">&#45;&#45;</span>-->
        </template>
      </el-table-column>
      <el-table-column
        :resizable="isResizable"
        prop="managerName"
        label="所属负责人">
        <template slot-scope="scope">
          <!--<span v-show="scope.row.supplier != null">{{ scope.row.supplier }}</span>-->
          <!--<span v-show="scope.row.supplier == null">&#45;&#45;</span>-->
        </template>
      </el-table-column>
      <el-table-column
        :resizable="isResizable"
        prop="status"
        label="状态">
        <template slot-scope="scope">
          <!--<span v-show="scope.row.supplier != null">{{ scope.row.supplier }}</span>-->
          <!--<span v-show="scope.row.supplier == null">&#45;&#45;</span>-->
        </template>
      </el-table-column>
      <el-table-column
        :resizable="isResizable"
        fixed="right"
        label="操作"
        width="250">        <template slot-scope="scope" >
          <el-button type="text"  style="margin-left: 10px;" @click="searchCar(scope.row)" v-auth="{id:'VEHICLE_DETAIL'}">详情</el-button>
          <el-button type="text"  style="margin-left: 10px;" @click="searchCar(scope.row)">修改</el-button>
          <el-button type="text"  @click="searchCar(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isResizable: false, // 可缩放
      searchFilter: {
        stationName: '',
        manager: ''

      },
      stationInfo: [{distributionName: 'ddd', address: 'dfff', managerName: 'dfjf', status: '0'}]
    }
  },
  mounted () {
    this.searchCar()
  },
  methods: {
    searchCar () {
      console.info(this.stationInfo)
    }
  }
}
</script>

<style scoped>
  .start{
    float:right;
    width:100%;
    margin-bottom: 1px;
    /*background: #f4f9ff;*/
  }
  .left{
    float:right;
  }
</style>
