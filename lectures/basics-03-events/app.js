const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    //when property is changed, watcher method executes
    // name(value /* old_value*/) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + "" + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name == "" || this.lastname == "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    // outputFullName() {
    //   if (this.name == "") {
    //     return "";
    //   }
    //   return this.name + " " + this.lastname;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
      this.lastname = "";
    },
  },
});

app.mount("#events");
