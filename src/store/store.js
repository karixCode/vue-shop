import { createStore } from 'vuex';
import basketStore from '@/store/BasketStore.js'

const store = createStore({
  state() {
    return {
      API_URL: 'http://lifestealer86.ru/api-shop/',
      isAuthenticated: localStorage.isAuthenticated || false,
      userToken: localStorage.userToken || ''
    };
  },

  mutations: {
    setAuthentication(state, value) {
      state.isAuthenticated = value;
      localStorage.isAuthenticated = value;
    },
    setUserToken(state, token) {
      state.userToken = token;
      localStorage.userToken = token;
    }
  },

  actions: {
    login({ commit }, token) {
      commit('setAuthentication', true);
      commit('setUserToken', token);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setUserToken', '');
    }
  },

  modules: {
    basketStore
  }
});

export default store;