<template>
  <div>
    <el-card>
    <comp-table
      v-loading="loading"
      :tableData="tableData"
      :tableHeader="tableHeader"
      :tableAttr="tableAttr"
      className="tableClassName"
      @tableOtherClick="tableOtherClick"
    >
    </comp-table>
    <comp-pagination
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      :page="page"
      :pageSize="pageSize"
      :totalCount="totalCount"
    >
    </comp-pagination>
    </el-card>
  </div>
</template>

<script>
  import Js2WordCloud from 'js2wordcloud'
  import {NewApi} from './Api'
  import CompTable from './table'
  import compPagination from '../../packages/components/pagination/index'
  import {Msg} from '../../tools/message'
  // import  '/src/assets/images/Woman.jpg'
    export default {
        name: "index",
      components: {
          CompTable,
          compPagination
      },
      data() {
        return {
          /** 分页信息 */
          page: 1,
          /** 每页数量  默认5 */
          pageSize: 5,
          /** 总数  需要动态获取 */
          totalCount: 20,
          tableHeader: [
            {prop: 'id', label: '用户ID'},
            {prop: 'words', label: '用户历史搜索关键词'}
          ],
          tableData: [],
          tableAttr: {
            noIndex: false,
            other: [
              {name: '查看模型', type: 'generateModel', color: 'green'},
            ],
            loading: false,
            show: false,
            shape: ''
          }
        }
      },
      methods:{
          run(){
            this.$router.push({path: '/VueCanvas'})
          },
          /** 获取模型的测试数据 */
          getTableData () {
            this.loading = true;
            this.data = {
              page: this.page,
              pageSize: this.pageSize,
            };
            console.log(this.data);
            NewApi.GetTrainData(this.data).then(res => {
              this.tableData = res.data.data;
              this.loading = false;
              this.totalCount = res.data.totalCount;
            })
          },
        /** 改变每页显示数量 */
        handleSizeChange: function (val) {
          this.pageSize = val;
          this.getTableData()
        },
        /** 改变页码 */
        handleCurrentChange: function (val) {
          this.page = val;
          this.getTableData()
        },
        tableOtherClick (row, type, index) {
          if (type === 'generateModel') {
            NewApi.generateModel({id: row.id}).then(res => {
              this.$router.push({name: '模型展示', params: res.data.data})
            })
          }
        },
      },
      mounted() {
          this.getTableData();
      }
    }
</script>

<style scoped>

</style>
