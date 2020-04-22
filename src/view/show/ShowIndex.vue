<template>
  <div>
    <h1>开始表演⑧</h1>
    <button @click="renderCloud(list)"></button>
    <div id="WordCloud">

    </div>
  </div>
</template>

<script>
  import Js2WordCloud from 'js2wordcloud'
  // import  '/src/assets/images/Shape.jpg'
    export default {
        name: "index",
      components: {
        Js2WordCloud
      },
      data(){
          return{
            list: [['hahah', 80], ['6666', 10], ['谈生', 70],['谈笑', 80],['谈笑风生', 60],['谈笑hhh风生', 10],['谈笑ooo风生', 50],['wcnm', 20],],
            imageShape: '',
            show:false,
            shape:''
          }
      },
      methods:{
        renderCloud (words){
          var wc = new Js2WordCloud(document.getElementById('WordCloud'));
          let list = words;
          let option = {
            imageShape: require('@/assets/images/Shape.jpg'),
            tooltip: {
              show: false,
              formatter: function (item) {
                console.log(item)
              }
            },
            list: list,
            shape: 'pentagon',
            ellipticity: 1
          };
          console.log(list);
          wc.setOption(option);
          window.onresize = function () {
            wc.setOption(option)
          }

        }
      }
    }
</script>

<style scoped>
  #WordCloud{
    height:500px;
    width:500px;
    background-color: pink;
    margin-left: 300px;
  }
</style>
