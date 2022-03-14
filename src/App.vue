<template>
  <div id="app">
    <router-link to="/login1">表单</router-link>
    <router-link to="/login">dneglu </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Watermark from '@common/watermark'
export default {
  name: 'App',
  mounted() {
    // Watermark.set("XC04441")
  }
}
</script>


<style lang="scss">
  html{
    margin: 0;
    padding: 0;
    height: 100%;
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      #app {
        height: 100%;
      }
    }
  }
</style>
