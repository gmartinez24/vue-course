<template>
  <div>
    <label>username </label>
    <input type="text" v-model="this.username" />
  </div>
  <div>
    <label>age </label>
    <input type="number" v-model="this.age" />
  </div>
  <div>
    <button @click="$emit('update-user', this.username, this.age)">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  emit: ["update-user"],

  data() {
    return {
      username: "",
      age: 0,
    };
  },
};
</script>
