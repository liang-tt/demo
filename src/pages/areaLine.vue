<script src="../../../baseConfig.js"></script>
<template>
    <div>
      <div id="lineDraw"></div>
    </div>
</template>

<script>
    export default {
        name: "area-line",
      data(){
          return {

          }
      },
      mounted() {
        this.drawLine();
      },
      methods: {
          drawLine() {
            let lineCharts = this.$echarts.init(document.getElementById("lineDraw"));
            let series =[{
              data: [820, 932, 901, 934, 1290, 1330, 1320,890,454],
              type: 'line',
              areaStyle: {
                // color: '#00c'
              }
            }];
            let options = {
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {
                    lineStyle: {
                      color: '#ccc',
                      width: '2',
                    }
                  },
                  axisLabel: {
                    rotate: '20',
                    color: 'fff'
                  },
                  data: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
                },
                yAxis: {
                  type: 'value'
                },
                series: series
            };
            lineCharts.setOption(options)
          }
      }
    }
</script>

<style lang="scss" scoped>
  #lineDraw {
    /*width: 400px;*/
    height: 600px;
  }
</style>
