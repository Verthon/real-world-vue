<template>
  <router-link class="event-link" :to="{ name: 'event-show', eventId: 1 }">
    <div class="event-card -shadow ">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users">
        {{ event.attendees.length }} people attending
      </BaseIcon>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'First event',
        date: 'Wedn Oct 07, 2020',
        time: '19:00',
        attendees: [
          { id: 'atn1', name: 'Jared Palmer' },
          { id: 'atn2', name: 'Mariusz Kowalski' }
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 300;
}
</style>
