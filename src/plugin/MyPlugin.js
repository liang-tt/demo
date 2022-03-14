import create from '@/utils/create'
import Notice from '@/components/Notice'
const MyPlugin = {
  install(Vue, options) {
    Vue.prototype.$notice = function(option) {
      return create(Notice,option)
    }
  }
}

export default MyPlugin;
