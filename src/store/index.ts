import Vue from "vue";
import Vuex from "vuex";
import {state, State} from '@/state';
import EventService from '@/services/EventService';


Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: {
    ADD_EVENT(state: any, event: any) {
      state.events.push(event)
    },
    SET_EVENTS(state: any, events: any) {
      state.events = events
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
      .then(res => {
        console.log()
        commit('SET_EVENTS', res.data)
      })
      .catch(error => {
        this.state.errors.fetchEvents = error
      })
    }
  },
  getters: {
    getEventById: (state: any) => (id: number) => {
      return state.events.find((event: any) => event.id === id)
    },
    getCategoriesLength: (state: any) => () => {
      return state.categories.length
    }
  },
  modules: {}
});
