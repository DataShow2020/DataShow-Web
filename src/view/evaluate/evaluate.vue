<template>
    <div id="chart" class="chart"></div>
</template>

<script>
  import CompTable from '../../packages/components/table/index'
  export default {
    name: "evaluate",
    components: {
      CompTable
    },
    data() {
      return {
        /** 表格属性设置 待完善 */
        tableAttr: {
          noIndex: true,
          other: [
            {name: '查看'},
            {name: '编辑'},
          ]
        },
        /** 表头 */
        tableHeader: [
          {
            prop: '评分',
            label: '账号',
            width: 120,
            sort: true
          }, {
            prop: 'number',
            label: '金额',
            width: 80
          }, {
            prop: 'selectValues',
            label: '下拉',
            width: 100
          }, {
            prop: 'selectValuesMu',
            label: '下拉多选',
            width: 100
          }, {
            prop: 'checkbox',
            label: 'checkbox',
            width: 80
          }, {
            prop: 'checkboxBtn',
            label: 'checkboxBtn',
            width: 120
          }, {
            prop: 'radio',
            label: '单选',
            width: 80
          }, {
            prop: 'radioBtn',
            label: '单选btn',
            width: 80
          }, {
            prop: 'dateTime',
            label: '日期时间',
            width: 120
          },
        ],
        /** 数据 */
        tableData: [],
      }
    },
    mounted() {
      this.getChart()
    },
    methods: {
      getTableData: function () {
        setTimeout(() => {
          this.tableData = []
        }, 500)
      },
      tableOtherClick(row, index) {
        console.log(row);
        console.log(index);
      },
      getChart() {
        let chart = this.$echarts.init(document.getElementById('chart'));
        let option = {
          title: {
            text: '订单评价',
            textStyle: {
              color: '#64253F',
              fontSize: '155%'
            },
            padding: [35 , 50]
          },
          tooltip: {},
          legend: {
            data: ['好评', '中评', '差评'],
            right: '1%',
            top: '5%',
            itemWidth: 25,
            itemHeight: 20,
            itemGap: 10,
            textStyle: {
              fontSize: 15,
              color: '#3C1223'
            }
          },
          series: [
            {
              color: ['#EB5635', '#E92474', '#EBBF35'],
              type: 'pie',
              label: {
                show: false
              },
              radius: ['25%', '27%'],
              data: [
                {value: 20, name: '好评'},
                {value: 10, name: '中评'},
                {value: 80, name: '差评'},
              ]
            },
            {
              color: ['#EB5635', '#E92474', '#EBBF35'],
              type: 'pie',
              radius: ['40%', '60%'],
              label: {
                show: false
              },
              data: [
                {value: 20, name: '好评'},
                {value: 10, name: '中评'},
                {value: 80, name: '差评'},
              ]
            }
          ]
        };
        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  .chart {
    width: 50%;
    height: 60%;
    background: #ffffff;
  }
</style>
