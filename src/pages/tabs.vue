<template>
  <div>
    <el-tabs type="border-card" @tab-click="skipTo">
      <el-tab-pane v-for="item in paths" :name="item.path" :label="item.label"></el-tab-pane>
        <router-view></router-view>
    </el-tabs>

  </div>
</template>

<script>
    export default {
        name: "tabs",
        data(){
          return {
            paths: [
              {
                path: '/tabs/lists',
                label: '地图'
              },
              {
                path: '/tabs/attatch',
                label: '附件'
              }
            ]
          }
        },
      methods: {
        skipTo (tab) {
          this.$router.push(tab.name);
        }
      }
    }
</script>

<style scoped>

</style>
