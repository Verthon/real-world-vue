<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  computed: mapState(['event', 'user']),
  methods: {
    fetchEvents() {
      this.$store.dispatch('event/fetchEvents')
    }
  },
  created() {
    this.fetchEvents()
  }
}
</script>

<style></style>
