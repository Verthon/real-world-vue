<template>
  <div>
    <h1>Event list</h1>
    <router-link :to="{ name: 'event-show' }"></router-link>
    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  }
}
</script>

<style></style>
