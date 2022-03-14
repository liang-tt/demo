

let Vue;

class KVueRouter{
  constructor(options) {
    console.log(options)
    this.$options = options;

    //创建响应式的current属性
    //利用Vue提供的defineReactive做响应化，这样将来current变化的时候，依赖的组件会重新render
    Vue.util.defineReactive(this,'current','/login'); //当前页面
    // this.current = '/login';

    //监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))


    this.routerMap = {};
    options.routes.forEach(route => {
      this.routerMap[route.path] = route;
    })

  }

  onHashChange() {
    console.log(window.location.hash)
      this.current = window.location.hash.slice(1)
  }


}

//方法
KVueRouter.install = function(_Vue) {
  //保存构造函数，在KVueRouter中使用
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      console.log(this.$options.router)
      if(this.$options.router) {
        this.prototype.$router = this.$options.router;
      }
    }
  })

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      //<a href="#/about"></a>
      //<router-link to="/about">XXXX</router-link>

      return h('a', {
        attrs: {
          href: '#' + this.to
        },
      },
      this.$slots.default
      )
    }
  })

  Vue.component('router-view', {
    render(h) {
      //获取path对应的componet
      const {routerMap, current} = this.$router;
      let component = routerMap[current].component || null;

      return h(component)
    }
  })

}

export default KVueRouter;
