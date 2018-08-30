<template>
  <div class="container">
    <div class="login">
      <el-form class="login-form" :model="loginForm">
        <el-form-item >
          <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="sub button-login" type="primary" @click="submitForm()"  id="enter">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { asyncRouterMap } from '@/router/index'
  import { mapGetters } from 'vuex'
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          userName: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters ([
        'addRouters'
      ])
    },
    mounted() {
      // this.asyncRoutes()
    },
    methods: {
      submitForm () {
        localStorage.setItem('token','sdfdsf');
        this.$router.push('/lists')
      },
      //动态挂载路由
      asyncRoutes () {
         let roles = ["admin"];
        /* console.log(asyncRouterMap)
        this.$router.addRoutes(asyncRouterMap)*/

         this.$store.dispatch('GenerateRoute',{roles}).then( () => {
           console.log(12)
           console.log(this.$store)
           this.$router.addRoutes(this.$store.getters.addRouters)
           next(...to)
         }).catch((err) => {
           console.log(this.$store.getters.addRouters)
         })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    border: 1px solid;
    width: 300px;
    height: 300px;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
  }
  .login-form {
    padding: 20px
  }
  .sub {
    width: 100%;
  }
</style>
