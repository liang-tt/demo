<template>
  <div>
    <div id="mapLines">

    </div>
    <div id="bmaps">

    </div>
  </div>
</template>

<script>
  import china from 'echarts/map/js/china'
  import bmap from 'echarts/extension/bmap/bmap.js'
  import { geoCoordMap , GZData } from '@/common/data'
    export default {
        name: "lists",
      data(){
          return {

          }
      },
      mounted() {
          this.drawMapLines();
          this.drawMaps()
      },
      methods: {
        convertData (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        },
          drawMapLines(){
            let mycharts = this.$echarts.init(document.getElementById('mapLines'));

            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

            var convertData = function (data) {
              var res = [];
              for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                  res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                  });
                }
              }
              return res;
            };

            let series = []
            series.push({   //路径动画
                type: 'lines',
                zlevel: 1,
                effect: {
                  show: true,
                  trailLength: 0.7,
                  symbol: 'circle',
                  color: '#fff'
                },
                lineStyle: {
                    color: '#ffccdd',
                    width: '0',
                    curveness: '0.2'
                },
                data: convertData(GZData)
              },{
                type: 'lines',
                zlevel: 2,
                effect: {
                  show: true,
                  trailLength: 0,
                },
                lineStyle: {
                    color: 'red',
                    width: '1',
                    curveness: '0.2'
                },
                data: convertData(GZData)
              },{
                type: 'effectScatter',
                rippleEffect: {
                  brushType: 'stroke'
                },
                coordinateSystem: 'geo',
                label: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                },
                data: GZData.map(function(val){
                  return {
                    name: val[1].name,
                    value: geoCoordMap[val[1].name].concat(val[1].value)
                  }
                })
            });

            let chartsOptions = {
              title: { text: '在Vue中使用echarts' },
              tooltip: {},
              geo: {
                map: 'china',
                roam: true
              },
              series: series
            };
            mycharts.setOption(chartsOptions)
          },
        drawMaps(){
          let bmaps = this.$echarts.init(document.getElementById('bmaps'));

          let data = [
            {
              "name": "棕榈花园",
              "value": ["104.084747", "30.626767"]
            },
            {
              "name": "督院府邸",
              "value": ["104.080847", "30.656587"]
            },
            {
              "name": "上锦美地",
              "value": ["104.09485", "30.671083"]
            },
            {
              "name": "西藏军区",
              "value": ["104.088901", "30.645687"]
            }
          ];
          /*let data =this.convertData([
              {name: "珠海", value: 42},
              {name: "宿迁", value: 43},
              {name: "咸阳", value: 43},
              {name: "铜川", value: 44},
              {name: "平度", value: 44},
              {name: "佛山", value: 44},
              {name: "海口", value: 44},
              {name: "江门", value: 45},
              {name: "嘉兴", value: 51},
              {name: "长春", value: 51},
              {name: "胶州", value: 52},
              {name: "银川", value: 52},
              {name: "张家港", value: 52},
              {name: "三门峡", value: 53},
              {name: "锦州", value: 54},
              {name: "南昌", value: 54},
              {name: "柳州", value: 54},

            ]);*/
          console.log(data)
          let series = [
            {
              name: 'pm2.5',
              type: 'scatter',
              coordinateSystem: 'bmap',
              symbol: 'image://static/imgs/dig.png',
              data: data,
              symbolSize: 12,
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              }
            }
          ];
          let options = {
            title: {
              text: '成都市',
              subtext: 'data from PM25.in',
              sublink: 'http://www.pm25.in',
              x:'center',
              textStyle: {
                color: '#ccc'
              }
            },
            bmap: {
              center: [104.072218,30.663453],
              zoom: 14,
              roam: true
            },
            /*geo: {
              map: 'china',
              label: {
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  areaColor: '#323c48',
                  borderColor: '#111'
                },
                emphasis: {
                  areaColor: '#2a333d'
                }
              }
            },*/
            series: series
          }

          bmaps.setOption(options)
        }
      },
    }
</script>

<style  lang="scss" scoped>
  #mapLines {
    height: 600px;
    width: 600px;
  }
  #bmaps {
    height: 600px;
    width: 600px;
  }
</style>
