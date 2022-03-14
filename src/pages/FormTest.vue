<template>
  <div>
    <k-form :model="userInfo" :rules="rules" ref="form">
      <k-form-item label="名字" prop="name">
        <k-input v-model="userInfo.name" placeholder="请输入"></k-input>
      </k-form-item>
      <k-form-item label="密码:" prop="pass">
        <k-input v-model="userInfo.pass" placeholder="请输入"></k-input>
      </k-form-item>
      <k-form-item >
        <el-button @click="submit">提交</el-button>
      </k-form-item>
    </k-form>


    {{userInfo.name}}
    <div>{{$store.state.counter}}</div>
    <el-button @click="$store.commit('add')">commit</el-button>
    <el-button @click="$store.dispatch('add')">dispatch</el-button>
  </div>
</template>

<script>
import KInput from '@/components/form/KInput'
import KFormItem from '@/components/form/KFormItem'
import KForm from '../components/form/KForm.vue'
import Notice from '@/components/Notice'
  export default {
    name: 'FormTest',
    components: {
      KInput,
      KFormItem,
      KForm,
      Notice,
    },
    data() {
     return {
        returnname: '',
        userInfo: {
          name: 'tom',
          pass: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入'}
          ],
          pass: [
            {required: true, message: '请输入密码'}
          ]
        }
     }
    },
    methods: {
      submit() {
        this.$refs.form.validate(val => {
          if(val) {
            console.log('success')
            this.$notice({title: '提示', message: '成功1'}).show();
          } else {
            console.log('error')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
