<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <label v-if="error">{{error}}</label>
    <!-- <label>{{form.rules}}</label> -->
  </div>
</template>

<script>
import Schema from 'async-validator'
  export default {
    inject: [
      'form'
    ],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        tyoe: String,
        required: true,
      }
    },
    data() {
      return {
        error: '',
      }
    },
    mounted() {
      this.$on('validate', () => {
        console.log(333)
        this.validate();
      })
    },
    methods: {
      validate() {
        if(!this.form.rules[this.prop]) {
          return;
        }
        const rule = this.form.rules[this.prop];
        const value = this.form.model[this.prop];

        const desc = {[this.prop]: rule};
         const validator = new Schema(desc);
         return validator.validate({[this.prop]: value}, errors => {
          if(errors) {
            this.error = errors[0].message;
          } else {
            this.error = ''
          }
         })
      }
    }
  }
</script>

<style scoped>

</style>
