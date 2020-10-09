import EventService, { Event } from '@/services/EventService'

export const namespaced = true;

export const state: { events: Event[], event: Event | null } = {
  events: [],
  event: null
}

export const mutations = {
  ADD_EVENT(state: any, event: Event) {
    state.events.push(event)
  },
  SET_EVENTS(state: any, events: Event[]) {
    state.events = events
  },
  SET_EVENT(state: any, event: Event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event: Event) {
    EventService.postEvent(event)
    commit('ADD_EVENT', event)
  },
  fetchEvents({ commit }) {
    EventService.getEvents()
      .then(res => {
        commit('SET_EVENTS', res.data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  fetchEvent({ commit, getters }: {commit: any, getters: any}, id: number) {

    const event = getters.getEventById(id)
    console.log('fetchEvent fired', event)
    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return EventService.getEvent(id).then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      })
    }
  }
}

export const getters = {
  getEventById: (state: any) => (id: number) => {
    console.log('getEventById getter called', state)
    return state.events.find((event: Event) => event.id === id)
  },
  getCategoriesLength: (state: any) => () => {
    return state.categories.length
  }
}
