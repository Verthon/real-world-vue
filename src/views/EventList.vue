<template>
  <div>
    <h1>Event list</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.ts'
export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: [],
      error: false
    }
  },
  created() {
    EventService.getEvents()
      .then(events => {
        this.events = events.data
      })
      .catch(error => {
        this.error = error
      })
  }
}
</script>

<style></style>
