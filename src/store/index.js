import Vue from 'vue'
import Vuex from 'vuex'

import scores from './modules/scores.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    scores,
  },
})
