<template>
  <div class="notice-box" v-if="isShow">
    <h3>{{title}}</h3>
  <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 1000
      },
    },
    data() {
      return {
        isShow: false,
      }
    },
    methods: {
      show() {
        this.isShow = true;
        // setInterval(this.hide, this.duration);
      },
      hide() {
        this.isShow = false;
        this.remove();
      }
    }
  }
</script>

<style lang="scss" scoped>
.notice-box {
  z-index: 2008;
  min-width: 80px;
}
</style>
