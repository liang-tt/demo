<template>
  <div>
    fdsf dfsds
    <div id="container" name="content" type="text/plain">
    </div>
  </div>
</template>

<script>
    import '../../static/ueditor-jsp/ueditor.config.js'
    import '../../static/ueditor-jsp/ueditor.all.js'
    import '../../static/ueditor-jsp/lang/zh-cn/zh-cn';
    export default {
        name: "ueditor",
        data() {
            return {
              ue: ""
            }
        },
        mounted() {
          this.installUeditor();
        },
        methods: {
            installUeditor () {
              this.ue = UE.getEditor("container")
            }
        }
    }
</script>

<style scoped>

</style>
