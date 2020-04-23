<template>
  <div class="back">
  <!-- 标签框 -->
<!--  <div style="display: flex;  height: 100px;">-->
<!--    <transition name="el-zoom-in-center">-->
<!--      <div v-show="show2" class="transition-box-center">.el-zoom-in-center</div>-->
<!--    </transition>-->

<!--    <transition name="el-zoom-in-top">-->
<!--      <div v-show="show2" id="box" :style="{margin: left+'px'}">.el-zoom-in-top</div>-->
<!--    </transition>-->

<!--    <transition name="el-zoom-in-bottom">-->
<!--      <div v-show="show2" class="transition-box-bottom">.el-zoom-in-bottom</div>-->
<!--    </transition>-->
<!--  </div>-->
    <div class="left">
      <canvas id="canvas" width="375" height="500" > 
                </canvas>
<!--      <button @click="stop()">stop</button>-->
    </div>

  <div id="WordCloud">
  </div>
  </div>
</template>

<script>
    import Js2WordCloud from "js2wordcloud";
    let canvas;
    let ctx;
    let con;
    let num = 0;
    let timer;
    let flag = true;
    let age;
    let gender;
    let education;
    let length = 0;
    let wide = 0;
    let gwide = 200;
    let glength = 10;
    let ewide = 100;
    let elength = 500;
    let dlength = 250;
    let dwide = 0;
    let d1length = 400;
    let d1wide = 200;
    export default {
      name: "ShowModel",
      data() {
        return {
          left:0,
          timer: null,
          show2: true,
          ModelData: {
            age: '',
            education: '',
            gender: '',
            probs: '',
            topic: ''
          }
        }
      },

      methods: {
        renderCloud(words) {
          for (let i = 0; i < words.length; i++) {
            let str = words[i][0];
            // str = str.substring(1,str.length - 1);
            let length = str.length;
            var position = str.indexOf(',');
            var newWord = str.substring(0, position + 1);
            var number = str.substring(position + 1, length);
            number = (number == 0 ? 1 : parseFloat(number).toFixed(1) * 10 + 5);
            // console.log(str);
            /** 去掉后端出来的字符串双引号 */
            words[i][0] = newWord;
            words[i][1] = number;
          }
          var copyArray = words.concat(words);
          var wc = new Js2WordCloud(document.getElementById('WordCloud'));
          let list = copyArray;
          let option = {
            imageShape: require(this.ModelData.gender == '女性' ? '@/assets/images/Woman.jpg' : '@/assets/images/female.png'),
            fontSizeFactor: 0.1,  // 当词云值相差太大，可设置此值进字体行大小微调，默认0.1
            maxFontSize: 20,      // 最大fontSize，用来控制weightFactor，默认60
            minFontSize: 14,      // 最大fontSize，用来控制weightFactor，默认60
            gridSize: 6,          // 密集程度 数字越小越密集
            weightFactor: 1,      // 字体大小=原始大小*weightFactor
            fontWeight: 'normal', //字体粗细
            // fontFamily: '微软雅黑', // 字体
            tooltip: {
              show: false,
              formatter: function (item) {
                console.log(item)
              }
            },
            backgroundColor: '#eefbff', // 背景颜色
            list: list,
            shape: 'pentagon',
            ellipticity: 1.5,
            noDataLoadingOption: {                                  // 无数据提示。
              backgroundColor: '#fff',
              text: '暂无数据',
            },
          };
          // console.log(list);
          wc.setOption(option);
          window.onresize = function () {
            wc.setOption(option)
          }

        },

        /** 画布渲染 */
        initCanvas() {
          canvas = document.getElementById('canvas');
          ctx = canvas.getContext('2d');
          // con = canvas.getContext('2d');
          // con.font="20px Georgia";
          // con.fillText("66666666",dwide,dlength);
          ctx.font = "50px Arial";
          var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop("0", "magenta");
          gradient.addColorStop("0.7", "blue");
          gradient.addColorStop("1.0", "red");
          gradient.addColorStop("0.6", "orange");
          gradient.addColorStop("0.7", "green");
          gradient.addColorStop("0.8", "yellow");
          // Fill with gradient
          ctx.fillStyle = gradient;

          timer = setInterval(function () {
            if (flag) {
              ctx.font = "50px Arial";
              d1length --;
              d1wide -= 1;
              dwide++;
              elength -= 2;
              gwide--;
              glength += 2;
              num += 3;
              wide++;
              length += 2.5;
            }
            // console.log(wide);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (wide > 200) {
              flag = false;
            }
            if (!flag) {
              ctx.font = "30px Arial";
              d1length ++;
              d1wide += 1;
              dwide--;
              elength += 2;
              gwide++;
              glength -= 2;
              num = num - 3;
              wide--;
              length = length - 2.5;
            }
            if (wide <= 10) {
              flag = true
            }
            ctx.fillText(gender, gwide, glength);
            ctx.fillText(age, wide, length);
            ctx.fillText(education, ewide, elength);
            // con.font="20px Georgia";
            ctx.fillText("233333", dwide, dlength);
            ctx.fillText("666666666", d1wide, d1length);
          }, 30);
        },
        /** 清除定时器 */
        stop(){
          clearInterval(timer)
        },

      },

      mounted() {
        this.ModelData = this.$route.params;
        console.log(this.ModelData);
        this.renderCloud(this.ModelData.probs);
        age = this.ModelData.age;
        education = this.ModelData.education;
        gender = this.ModelData.gender;
        this.initCanvas();
        // 当调整窗口大小时重绘canvas
        window.onresize = () => {
          this.initCanvas()
        };
      },

    }
</script>

<style scoped>
  canvas {
    width: 600px;
    height: 600px;
  }
  .back {
    width: 100%;
    height: 100%;
    background-color: #eefbff;
    /*background: url("../../assets/images/loginBackground.png");*/
    /*background-size: cover;*/
    /*margin-top: -20px;*/
  }
  #WordCloud{
    height:600px;
    width:600px;
    /*margin-left: 400px;*/
    float: left;
  }
  .left{
    width: 600px;
    height: 600px;
    /*position: absolute;*/
    float: right;
    /*background-color: #33a2f7;*/
  }
</style>
