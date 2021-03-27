import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webTitle : '头铁号'
  },
  getters : {
    getWebTitle (){
      return this.webTitle
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
