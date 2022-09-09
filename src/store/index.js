import { createStore } from 'vuex'

export default createStore({
  state: {
    tabLastClose: null
  },
  getters: {
    tabLastClose: s => s.tabLastClose
  },
  mutations: {
    updateLastClose (state, tab) {
      state.tabLastClose = tab
    }
  },
  actions: {
  },
  modules: {
  }
})
