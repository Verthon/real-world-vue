<template>
  <div class="notifcation-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      timeout: null
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 4000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    }
  },
  methods: mapActions('notification', ['remove'])
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
