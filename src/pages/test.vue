<script src="../../../wdApi.js"></script>
<script src="../../../baseConfig.js"></script>
<template>
  <div>
    <div id="container" type="text/plain"></div>
  </div>

</template>

<script>
  import '../../static/ueditor-jsp/ueditor.config.js'
  import '../../static/ueditor-jsp/ueditor.all.min.js'
  import '../../static/ueditor-jsp/lang/zh-cn/zh-cn.js';
    export default {
        name: "test",
      data() {
          return {
            ue: ""
          }
      },
      mounted() {
          console.log(12)
        this.installUeditor();
      },
      methods: {
        installUeditor () {
          UE.delEditor("container")
          this.ue = UE.getEditor("container");
        }
      }
    }

</script>

<style scoped>

</style>
