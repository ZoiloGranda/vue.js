import Vue from 'vue'
import Vuex from 'vuex'
import Tareas from '../modules/tareas'
import Contador from '../modules/contador'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   titulo:'Desde store index.js'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
   Tareas,
   Contador
  }
})
