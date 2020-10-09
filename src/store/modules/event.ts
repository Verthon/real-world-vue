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
  createEvent({ commit, dispatch }, event: Event) {
    EventService.postEvent(event)
      .then(res => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: `Your event was added successfully`
        }
        dispatch('notification/add', notification, {root: true})
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching events ${error.message}`
        }
        dispatch('notification/add', notification, {root: true})
      })
    
  },
  fetchEvents({ commit, dispatch }) {
    EventService.getEvents()
      .then(res => {
        commit('SET_EVENTS', res.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching events ${error.message}`
        }
        dispatch('notification/add', notification, {root: true})
      })
  },
  fetchEvent({ commit, getters, dispatch }: {commit: any, getters: any, dispatch: any}, id: number) {

    const event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return EventService.getEvent(id).then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      }).catch(error => {
        const notification = {
          type: 'error',
          message: `There was a problem fetching events ${error.message}`
        }
        dispatch('notification/add', notification, {root: true})
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
