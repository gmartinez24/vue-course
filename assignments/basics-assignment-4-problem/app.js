const app = Vue.createApp({
  data() {
    return {
      input: "",
      hidden: false,
      color: "",
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        hidden: this.hidden,
        visible: !this.hidden,
      };
    },
  },
  methods: {
    toggleHidden() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
