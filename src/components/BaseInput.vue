<template>
  <input type="text" :name="name" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
