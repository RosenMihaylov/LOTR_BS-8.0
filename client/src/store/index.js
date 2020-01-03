import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLogged: false,
    activeUser: "",
    phase: [
      'Preparations',
      'Fellowship phase',
      'Shadow phase',
      'Maneuver phase',
            
    ],
    currentPhasePassiveSkill: "",

  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isLogged = true;
      } else {
        state.isLogged = false;
      }
    },
    setUser(state, email) {
      state.user = email;
    },
    logout(state) {
      state.isLogged = false;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, email) {
      commit("setUser", email);
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  getters: {
    isUserLoggedIn: state => {
      return state.isLogged;
    },
    isUserAdmin: state => {
      return state.isUserAdmin;
    },
    user: state => {
      return state.user;
    }
  }
});
