<template>
  <form @submit.prevent="addFriend()">
    <div>
      <label>Name</label>
      <input type="text" v-model="this.newFriend.name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="this.newFriend.phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="this.newFriend.email" />
    </div>
    <div>
      <label>Favorite?</label>
      <input type="checkbox" v-model="this.newFriend.isFavorite" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      newFriend: {
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      },
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", this.newFriend);
    },
  },
};
</script>
