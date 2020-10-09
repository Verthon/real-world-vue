export const namespaced = true;

export const state = {
  notifications: []
}

let nextId = 1

export const mutations = {
  PUSH(state: any, notification: any) {
    state.notifications.push({
      ...notification,
      id: nextId++
    })
  },
  DELETE(state: any, notificationToRemove: any) {
    state.notifications = state.notifications.filter(
      (notification: any) => notification.id !== notificationToRemove.id)
  }
}

export const actions = {
  add({ commit }, notification: any) {
    commit('PUSH', notification)
  },
  delete({ commit}, notificationToRemove: any) {
    commit('DELETE', notificationToRemove)
  }
}