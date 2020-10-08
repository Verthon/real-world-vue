<template>
  <div>
    <h1>Event list</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  computed: mapState(['events']),
  methods: {
    fetchEvents() {
      this.$store.dispatch('fetchEvents')
    }
  },
  created() {
    this.fetchEvents()
  }
}
</script>

<style></style>
