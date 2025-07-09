const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      hidden: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleHide() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
