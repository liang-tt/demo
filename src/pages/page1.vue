<template>
  <div>
    <span>{{name}}</span>
    <div>dfhdsiofffffj</div>
    <div class="searchLetter">
      <div class="left">首字母：</div>
      <div class="right">
        <span class="item" v-for='(letter,index,key) in letters'  :class='{active:searchForm.firstWord == letter}'>{{letter}}</span>
      </div>
    </div>
    <div>
      <el-progress type="circle" :percentage="prog" color="#8e71c7" id='circle'></el-progress>
    </div>
    <div>{{status | reviewStatus}}</div>
  </div>
</template>

<script>
    import {reviewStatus } from "@/common/filters"
    export default {
        name: "lists",
      filters: {
        reviewStatus: reviewStatus
      },
        data(){
            return {
              name: "page1",
              searchForm: {
                firstWord : 'a'
              },
              letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
              progress: 120,
              status: 1
            }
        },
        watch: {
          '$route'(to,from){
            if(to.query.name){
              this.name = to.query.name;
            }
          }
        },
      computed: {
          prog (item){
            return 100;
          }
      },
      mounted () {
          this.getCircle()
      },
      methods: {
          getCircle () {
            let circle = document.getElementById("circle").getElementsByClassName("el-progress__text")[0];

            circle.innerHTML = "120%";
          }

      }
    }
</script>

<style lang="scss" scoped>

    .searchLetter {
      margin-top: 20px;
      background: #FBFBFD;
      &:after {
        content: '';
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
      }
      .left { float: left;width: 80px;}
      .right {
        margin-left: 90px;
        .item {
          user-select: none;
          box-sizing: border-box;
          margin-right: 20px;
          color: #333;
          padding: 4px 10px;
          cursor: pointer;
          border-radius: 5px;
          &.active {
            color: #fff;
            background: #409EFF;
          }
        }
      }
    }

</style>
