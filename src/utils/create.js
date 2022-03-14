import Vue from "vue";
function create(Components, props) {
  //组件构造函数如何获取
  //1、Vue.extend()
  //2、render
  const vm = new Vue({
    //h是createElement，返回VNode（虚拟节点）
    //需要挂载才能变成真实dom
    render: h => h(Components, {props})
  }).$mount(); //不指定宿主元素，会创建真实的dom元素，但是不会追加

  //vm.$el获取真实dom
  document.body.appendChild(vm.$el);
console.log(vm)
  const comp = vm.$children[0];
  console.log(55)

  //删除
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }


  //extend方法
  // let myVue = Vue.extend(Components);
  // const comp = new myVue({propsData: props});
  // console.log(comp)
  // comp.$mount();
  // console.log(comp)

  // document.body.appendChild(comp.$el);

  // comp.remove = function() {
  //   document.body.removeChild(comp.$el);
  //   comp.$destroy();
  // }

  return comp;
}

export default create;
