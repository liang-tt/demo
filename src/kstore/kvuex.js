
let Vue;

class Store {
  constructor(options) {

    //响应化处理state
    this.state = new Vue({
      data: options.state
    })

    this._mutations = options.mutations;
    this._actions = options.actions;

    //绑定commit，dispatch的上下文为store实例
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)

  }

  //commit('add', 1)
  //type mutations的类型
  //payload 载荷，是参数
  commit(type, payload) {
    console.log(this)
    const entry = this._mutations[type];
    console.log(entry)
    if(entry) {
      entry(this.state, payload)
    }
  }

  //dispatch('add', 1)
  //type actions的类型
  //payload 载荷，是参数
  dispatch(type, payload) {
    console.log(type,payload,this)
    const entry = this._actions[type];
    console.log(entry)
    if(entry) {
      entry(this, payload)
    }
  }
}

function install(_Vue) {
  console.log(444,_Vue)
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if(this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }

  })
}

export default {
  Store,
  install,
}
