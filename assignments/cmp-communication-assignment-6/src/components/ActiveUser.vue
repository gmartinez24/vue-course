<template>
  <h2>Username: {{ username }}</h2>
  <h3>Age: {{ age }} years</h3>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
      default: "",
    },
    age: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
