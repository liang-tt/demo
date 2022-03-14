<template>
  <div>
    <!-- v-bind="$attrs"展开$attrs -->
    {{value}}
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    inheritAttrs: false, //避免设置到根元素上
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
    },
    methods: {
      onInput(e) {
        console.log(e.target.value)
        this.$emit('input', e.target.value);
        //通知父级执行校验
        console.log(this.$parent)
        this.$parent.$emit('validate');
      }
    }
  }
</script>

<style scoped>

</style>
