// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './public-path';
import Vue from 'vue'
import App from './App'
import axios from './common/axios'
// import router from './krouter'
import router from './router'
// import store from './store/store'
import store from './kstore'
import Element from 'element-ui'
import './element-variables.scss'
import './css/common.scss'
import echarts from 'echarts'
import create from '@/utils/create'
import MyPlugin from "./plugin/MyPlugin";
Vue.use(MyPlugin);

Vue.config.productionTip = false
Element.Dialog.props.closeOnClickModal.default = false;  //模态框点击遮罩层不关闭
Vue.use(Element)
Vue.prototype.$https = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$create = create;
/* eslint-disable no-new */

function message() {
  // Vue.prototype.$message.info("34")
  console.log()
}
message()
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

// let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/vueDemo' : '/',
  //   // mode: 'history',
  //   routes,
  // });

    console.log(777)
    // router.beforeEach((to, from, next) => {
    //   if (window.__POWERED_BY_QIANKUN__ && to.path.indexOf('/vueDemo') === -1) {
    //       let newTo = JSON.parse(JSON.stringify(to));
    //       newTo.path = '/vueDemo' + newTo.path;
    //       router.replace(newTo);
    //   }
    //   next();
    // });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#micro_app') : '#micro_app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
} else {
  console.log(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
  debugger
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}
