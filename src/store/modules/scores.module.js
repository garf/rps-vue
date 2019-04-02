import {
  ADD_SCORES,
  RESET_SCORES,
} from '@/store/actions.type'

import {
  SET_SCORES,
} from '@/store/mutations.type'

const state = {
  players: [
    { name: 'Player 1', score: 0 },
    { name: 'CPU', score: 0 },
  ],
}

const getters = {
  players: state => state.players,
}

const actions = {
  [ADD_SCORES] ({ commit }) {
    // TODO: make scores generation
    commit(SET_SCORES, [])
  },
  [RESET_SCORES] ({ commit }) {
    // TODO: make scores generation
    commit(SET_SCORES, [])
  },
}

const mutations = {
  [SET_SCORES] (state, isLoading) {
    // TODO: make settings scores
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
