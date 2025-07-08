const app = Vue.createApp({
  data() {
    return {
      num: 0,
    };
  },
  watch: {
    num() {
      const that = this;
      setTimeout(function () {
        that.num = 0;
      }, 5000);
    },
  },
  computed: {
    output() {
      if (this.num < 37) {
        return "Not there yet";
      } else if (this.num > 37) {
        return "Too much";
      }
      return this.num;
    },
  },
  methods: {
    add(n) {
      this.num += n;
    },
  },
});

app.mount("#assignment");
