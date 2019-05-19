<template>
  <div style="width: 100%;height: 100%">
    <el-card class="chart" style="float: left">
      <div slot="header">
        <span>所有订单评价统计</span>
      </div>
      <div id="chart" style="width: 100%;height: 100%"></div>
    </el-card>
    <el-card class="chart" style="float: right">
      <div slot="header">
        <span>本年订单评价统计</span>
        <el-date-picker
          v-model="countTime"
          type="year"
          placeholder="选择统计年份"
          style="margin-left: 180px"
          format="yyyy"
          value-format="yyyy"
          :picker-options="chooseDatePicker">
        </el-date-picker>
        <el-button style="float: right; padding: 10px 0" type="text" @click="getChart2">查询</el-button>
      </div>
      <div id="chart2" style="width: 100%;height: 100%;margin-top: -17px"></div>
    </el-card>
  </div>
</template>

<script>
import CompTable from '../../packages/components/table/index'
import {evaluateApi} from '@/view/evaluate/evaluateApi'

export default {
  name: 'evaluate',
  components: {
    CompTable
  },
  data () {
    return {
      chart1: {},
      chart2: {},
      countTime: '',
      chooseDatePicker: this.chooseDate()
    }
  },
  mounted () {
    this.getChart1()
    this.getChart2()
  },
  methods: {
    chooseDate () {
      return {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    },
    getChart1 () {
      evaluateApi.GetTotalApi().then(res => {
        this.chart1 = res.data.data
        let chart = this.$echarts.init(document.getElementById('chart'))
        let option = {
          backgroundColor: '#344b58',
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
              color: '#90979c'
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
                {value: this.chart1.good, name: '好评'},
                {value: this.chart1.general, name: '中评'},
                {value: this.chart1.bad, name: '差评'}
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
                {value: this.chart1.good, name: '好评'},
                {value: this.chart1.general, name: '中评'},
                {value: this.chart1.bad, name: '差评'}
              ]
            }
          ]
        }
        chart.setOption(option)
      })
    },
    getChart2 () {
      evaluateApi.GetYearApi({countTime: this.countTime}).then(res => {
        this.chart2 = res.data.data
        let good = []
        let other = []
        let total = []
        let type1 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        let type = []
        let date = new Date().getMonth() + 1
        if (parseInt(this.countTime, 10) < new Date().getFullYear()) {
          date = 12
        }
        if (!this.chart2.good) {
          good = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        } else {
          for (let i = 1; i < date; i++) {
            let info = 'month' + i
            good.push(this.chart2.good[info])
          }
        }
        if (!this.chart2.other) {
          other = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        } else {
          for (let i = 1; i < date; i++) {
            let info = 'month' + i
            other.push(this.chart2.other[info])
          }
        }
        if (!this.chart2.total) {
          total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        } else {
          for (let i = 1; i < date; i++) {
            let info = 'month' + i
            total.push(this.chart2.total[info])
          }
        }
        for (let i = 1; i < date; i++) {
          type.push(type1[i - 1])
        }
        let chart = this.$echarts.init(document.getElementById('chart2'))
        let option = {
          backgroundColor: '#344b58',
          'tooltip': {
            'trigger': 'axis',
            'axisPointer': {
              'type': 'shadow',
              textStyle: {
                color: '#fff'
              }

            }
          },
          'grid': {
            'borderWidth': 0,
            'top': 110,
            'bottom': 95,
            textStyle: {
              color: '#fff'
            }
          },
          'legend': {
            right: '1%',
            top: '5%',
            textStyle: {
              fontSize: 15,
              color: '#90979c'
            },
            'data': ['好评', '中差评', '订单总评']
          },

          'calculable': true,
          'xAxis': [{
            'type': 'category',
            'axisLine': {
              lineStyle: {
                color: '#90979c'
              }
            },
            'splitLine': {
              'show': false
            },
            'axisTick': {
              'show': false
            },
            'splitArea': {
              'show': false
            },
            'axisLabel': {
              'interval': 0

            },
            'data': type
          }],
          'yAxis': [{
            'type': 'value',
            'splitLine': {
              'show': false
            },
            'axisLine': {
              lineStyle: {
                color: '#90979c'
              }
            },
            'axisTick': {
              'show': false
            },
            'axisLabel': {
              'interval': 0

            },
            'splitArea': {
              'show': false
            }

          }],
          'dataZoom': [{
            'show': true,
            'height': 30,
            'xAxisIndex': [
              0
            ],
            bottom: 30,
            'start': 10,
            'end': 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5'

            },
            textStyle: {
              color: '#fff'},
            borderColor: '#90979c'

          }, {
            'type': 'inside',
            'show': true,
            'height': 15,
            'start': 1,
            'end': 35
          }],
          'series': [{
            'name': '好评',
            'type': 'bar',
            'stack': '总量',
            'barMaxWidth': 35,
            'barGap': '10%',
            'itemStyle': {
              'normal': {
                'color': 'rgba(255,144,128,1)',
                'label': {
                  'show': true,
                  'textStyle': {
                    'color': '#fff'
                  },
                  'position': 'insideTop'
                }
              }
            },
            'data': good
          },

          {
            'name': '中差评',
            'type': 'bar',
            'stack': '总量',
            'itemStyle': {
              'normal': {
                'color': 'rgba(0,191,183,1)',
                'barBorderRadius': 0,
                'label': {
                  'show': true,
                  'position': 'top'
                }
              }
            },
            'data': other
          }, {
            'name': '订单总评',
            'type': 'line',
            'stack': '总量',
            symbolSize: 10,
            symbol: 'circle',
            'itemStyle': {
              'normal': {
                'color': 'rgba(252,230,48,1)',
                'barBorderRadius': 0,
                'label': {
                  'show': true,
                  'position': 'top'
                }
              }
            },
            'data': total
          }
          ]
        }
        chart.setOption(option)
      })
    }
  }
}
</script>

<style scoped>
  .chart {
    width: 49%;
    height: 99%;
    background: #ffffff;
  }
  .el-card /deep/ .el-card__body {
    height: 85%;
  }
</style>
