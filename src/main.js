// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from './common/axios'
import router from './router'
import store from './store/store'
import Element from 'element-ui'
import './element-variables.scss'
import './css/common.scss'
import echarts from 'echarts'

Vue.config.productionTip = false
Element.Dialog.props.closeOnClickModal.default = false;  //模态框点击遮罩层不关闭
Vue.use(Element)
Vue.prototype.$https = axios;
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */

function message() {
  // Vue.prototype.$message.info("34")
  console.log()
}
message()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
