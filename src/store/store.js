import Vue from 'vue'
import Vuex from 'vuex'

import pression from '@/store/module/permission.js'
import getters from '@/store/getters'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    pression
  },
  getters: getters,
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
