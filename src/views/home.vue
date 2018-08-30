<template>
    <el-container>
      <el-header>
        <top></top>
      </el-header>
      <el-container>
        <el-aside>
          <left-bar></left-bar>
        </el-aside>
        <el-main>
          <div>{{$route.name}}</div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="item.name">
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Top from '@/components/top'
import LeftBar from '@/components/leftBar'

export default {
    name: "home",
    components: {
      Top,
      LeftBar
    },
    mounted() {
      console.log(this.$route.matched)
    }
  }
</script>

<style lang="scss" scoped>
    .el-container {
      height: 100%;
      .el-header {
        background: cadetblue;
      }
      .el-aside {
        background: gray;
      }
    }
</style>
