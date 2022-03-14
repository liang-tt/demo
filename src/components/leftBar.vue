<template>
  <!--<el-aside>-->
      <div class="aside">
        <el-menu>
          <!--<router-linker v-for="(item,index) in $router.options.routes" :to="{path:item.path}">
            <el-menu-item :index="item.path+index">item.meta.title</el-menu-item>
          </router-linker>-->
          <router-link to="/">
            <el-menu-item index="/lists">列表</el-menu-item>
          </router-link>
          <router-link to="/page1">
            <el-menu-item index="/page1">列表1</el-menu-item>
          </router-link>
          <router-link :to="{path:'/page1',query:{name:'sweet'}}">
            <el-menu-item index="/page11">列表1</el-menu-item>
          </router-link>
          <router-link :to="{path:'/tabs'}">
            <el-menu-item index="/tabs">切换</el-menu-item>
          </router-link>
          <router-link to="/ueditor">
            <el-menu-item index="/ueditor">富文本编辑</el-menu-item>
          </router-link>
          <router-link to="/areaLine">
            <el-menu-item index="/areaLine">折线图</el-menu-item>
          </router-link>
          <router-link to="/formTest">
            <el-menu-item index="/formTest">表单</el-menu-item>
          </router-link>
          <router-link to="/vueMicroDemo/vueMicDemo1/page1">
            <el-menu-item index="/vueMicDemo1/page1">vueMic列表</el-menu-item>
          </router-link>
        </el-menu>
      </div>
  <!--</el-aside>-->
</template>
<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "left-bar",
      data(){
          return {}
      },
      computed: {
        ...mapGetters ([
          'permission_routers'
        ])
      },
      mounted() {
          console.log(this.permission_routers)
      }
    }
</script>

<style lang="scss" scoped>
  .el-menu {
    background: gray;
  }
</style>
