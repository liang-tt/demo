import Vue from 'vue'
import Vuex from './kvuex'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    add(state) {
      state.counter++;
    }
  },
  actions: {
    add({commit}) {
      setTimeout(() => {
        commit('add')
      },1000)
    }

  }
})
export default store;
