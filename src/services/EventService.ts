import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

type User = {
  id: string,
  name: string
}

export type Event = {
  id: number,
      user: User,
      category: string,
      organizer: User,
      title: string,
      description: string,
      location: string,
      date: string,
      time: string,
      attendees: User[],
}

export default {
  getEvents() {
    return apiClient.get('events')
  },
  getEvent(id: number) {
    return apiClient.get(`events/${id}`)
  },
  postEvent(event: Event) {
    return apiClient.post('events', event)
  }
}