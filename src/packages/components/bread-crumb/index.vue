<template>
  <!--<el-breadcrumb separator-class="/" style="line-height: 50px; font-size: 16px">-->
    <!--<transition-group name="breadcrumb">-->
      <!--<el-breadcrumb-item-->
        <!--v-for="(item, index)  in levelList"-->
        <!--:key="item.name + index"-->
        <!--:to="item.path">-->
        <!--{{renderZhCN(item.name)}}-->
      <!--</el-breadcrumb-item>-->
    <!--</transition-group>-->
  <!--</el-breadcrumb>-->

  <el-breadcrumb separator="/">
    <el-breadcrumb-item>用户画像可视化</el-breadcrumb-item>
    <!--<el-breadcrumb-item>{{firstMenuLabel}}</el-breadcrumb-item>-->
    <el-breadcrumb-item><span style="font-weight: bold">{{menuLabel}}</span></el-breadcrumb-item>

  </el-breadcrumb>

</template>

<script>
  import mock from '@/mock/menu.json'

  export default {
    name: 'comp-bread',
    data() {
      return {
        levelList: null,
        menuList: mock.menu,
        menuLabel: '',
        firstMenuLabel: '',
        path:'',
        matched:''
      }
    },
    methods: {
      renderZhCN(path) {
        let val = [];
        for (let k = 0; k < this.menuList.length; k++) {
          const v = this.menuList[k].menuGroup.find(v => {
            return (v.to).trim() === (path === '/' ? '/' : '/' + path)
          });
          v && val.push(v)
        }
        return val.length ? val[0].label : '首页'
      },
      getBreadcrumb() {
        let matched = '';
        if(this.$route.matched.length > 1){
         matched = this.$route.matched[1].path;
        }
        console.log(matched);
        // const first = matched[0]
        // if (first && first.name !== '／') {
        //   matched = [{path: '/', name: '／'}].concat(matched)
        // }
        // this.levelList = matched
        for (let i = 0; i < this.menuList.length; i++){
           let o = this.menuList[i];
           o.menuGroup.forEach(v => {
             if (v.to === matched) {
               this.menuLabel = v.label;
               this.firstMenuLabel = o.submenu;
             }
           })
        }
      },
    },
    created() {
      this.getBreadcrumb()
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
  }
</script>

<style>

</style>
