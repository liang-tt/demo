<template>
  <el-row type="flex" align="middle">
    <el-col :span="10">
      <div>XXXXXXXXXXXXX</div>
    </el-col>
    <el-col :span="14" align="right">
      <div>
        <el-dropdown @command="logout">
            <span class="el-dropdown-link">
              XXX<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="c">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--<el-button type="primary" @click="logout">退出</el-button>-->
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "top",
        data(){
          return {

          }
        },
      methods: {
        logout(commond){
          this.$router.push("/login")
          localStorage.removeItem('token')
        }
      }
    }
</script>

<style lang="scss" scoped>
  .el-row {
    line-height: 60px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
</style>
