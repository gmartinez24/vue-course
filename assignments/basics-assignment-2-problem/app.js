const app = Vue.createApp({
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button Pressed");
    },
    updateInput(event, input) {
      if (input == 1) {
        this.input1 = event.target.value;
      } else {
        this.input2 = event.target.value;
      }
    },
  },
});

app.mount("#assignment");
