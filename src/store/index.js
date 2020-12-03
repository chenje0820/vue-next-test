import { createStore } from 'vuex'

export default createStore({
  state: {
    name:'chen'
  },
  mutations: {
    changeName (state,val) {
      state.name = val
    }
  },
  actions: {
  },
  modules: {
  }
})
