<template>
  <active-user :username="this.username" :age="this.age"></active-user>
  <user-data @update-user="updateUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: 0,
    };
  },

  methods: {
    updateUser(username, age) {
      this.username = username;
      this.age = age;
    },
  },
};
</script>
